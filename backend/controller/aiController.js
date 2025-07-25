import OpenAI from "openai";
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import FormData from "form-data"; // Important for image upload
import fs from "fs";
import pdf from "pdf-parse/lib/pdf-parse.js";

const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const generateArticle = async (req, res) => {
  try {
    console.log("📝 Received generateArticle request");
    const { userId } = req.auth();
    const { prompt, length } = req.body;
    console.log("Prompt:", prompt, "Length:", length);

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: length,
    });

    const content = response.choices[0].message.content;
    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'article')`;
    res.json({ success: true, content });
  } catch (error) {
    console.error("❌ Error in generateArticle:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const generateBlogTitle = async (req, res) => {
  try {
    console.log("📝 Received generateBlogTitle request");
    const { userId } = req.auth();
    const { prompt } = req.body;
    console.log("Prompt:", prompt);

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 100,
    });

    const content = response.choices[0].message.content;
    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'blog-title')`;
    res.json({ success: true, content });
  } catch (error) {
    console.error("❌ Error in generateBlogTitle:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const generateImage = async (req, res) => {
  try {
    console.log("🖼️ Received generateImage request");
    const { userId } = req.auth();
    const { prompt, publish } = req.body;
    console.log("Prompt:", prompt);

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = `data:image/png;base64,${Buffer.from(
      data,
      "binary"
    ).toString("base64")}`;
    const { secure_url } = await cloudinary.uploader.upload(base64Image);

    await sql`INSERT INTO creations (user_id, prompt, content, type, publish) VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${
      publish ?? false
    })`;
    res.json({ success: true, content: secure_url });
  } catch (error) {
    console.error("❌ Error in generateImage:", error.message);
    if (error.response) {
      console.error("🧾 Axios response error:", error.response.data);
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

// export const removeImageBackground = async (req, res) => {
//   try {
//     console.log("🖼️ Received generateImage request");
//     const { userId } = req.auth();
//     const image = req.file;
//     console.log("Image received for background removal:", image);

//     const { secure_url } = await cloudinary.uploader.upload(image.path, {
//       transformation: [
//         {
//           effect: "background_removal",
//           background_removal: "remove_the_background",
//         },
//       ],
//     });

//     await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (
//     ${userId}, 'Remove background from image', ${secure_url}, 'image')`;

//     res.json({ success: true, content: secure_url });
//   } catch (error) {
//     console.error("❌ Error in removeImageBackground:", error.message);
//     if (error.response) {
//       console.error("🧾 Axios response error:", error.response.data);
//     }
//     res.status(500).json({ success: false, error: error.message });
//   }
// };


// Helper: Wait
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Helper: Poll Cloudinary Admin API to get secure_url
const getAssetUrl = async (publicId) => {
  try {
    const result = await cloudinary.api.resource(publicId, {
      resource_type: "image",
    });
    return result?.secure_url || null;
  } catch (err) {
    return null; // Likely still processing
  }
};

export const removeImageBackground = async (req, res) => {
  try {
    console.log("🖼️ Received removeImageBackground request");
    const { userId } = req.auth();
    const image = req.file;
    const timestamp = Date.now();
    const publicId = `background-removed/bg_removed_${timestamp}`;

    console.log("📤 Uploading to Cloudinary...");
    const result = await cloudinary.uploader.upload(image.path, {
      public_id: publicId,
      upload_preset: "background_removal_preset", // ✅ correctly placed
      folder: "background-removed",
      overwrite: true,
    });

    console.log("📋 Cloudinary upload result:", result);

    const eagerUrl = result.eager?.[0]?.secure_url;

    if (!eagerUrl) {
      throw new Error("Background removal failed — no secure_url in eager result.");
    }

    await sql`INSERT INTO creations (user_id, prompt, content, type)
      VALUES (${userId}, 'Remove background from image', ${eagerUrl}, 'image')`;

    res.json({ success: true, content: eagerUrl });
  } catch (error) {
    console.error("❌ Error in removeImageBackground:", error.message || error);
    res.status(500).json({ success: false, error: error.message });
  }
};



export const removeImageObject = async (req, res) => {
  try {
    console.log("🖼️ Received generateImage request");
    const { userId } = req.auth();
    const { object } = req.body;
    const   image  = req.file;

    const { public_id } = await cloudinary.uploader.upload(image.path);

    const imageUrl = cloudinary.url(public_id, {
      transformation: [{ effect: `gen_remove:${object}` }],
      resource_type: "image",
    });

    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (
    ${userId}, ${`Removed ${object} from image`}, ${imageUrl}, 'image')`;

    res.json({ success: true, content: imageUrl });
  } catch (error) {
    console.error("❌ Error in removeImageObject:", error.message);
    if (error.response) {
      console.error("🧾 Axios response error:", error.response.data);
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

export const resumeReview = async (req, res) => {
  try {
    console.log("🖼️ Received generateImage request");
    const { userId } = req.auth();
    const resume = req.file;
    
    if (resume.size > 5 * 1024 * 1024) {
      return res.json({
        success: false,
        message: "Resume file size exceeds allowed size (5MB).",
      });
    }
    const dataBuffer = fs.readFileSync(resume.path);
    const pdfData = await pdf(dataBuffer);

    const prompt = `Review the following resume and provide constructive feedback on its strengths, weeknesses and areas of improvement
    Resume Conetent:\n\n${pdfData.text}`;

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;

    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (
    ${userId}, 'Review the uploaded resume', ${content}, 'resume-review')`;

    res.json({ success: true, content: content });
  } catch (error) {
    console.error("❌ Error in resumeReview:", error.message);
    if (error.response) {
      console.error("🧾 Axios response error:", error.response.data);
    }
    res.status(500).json({ success: false, error: error.message });
  }
};


