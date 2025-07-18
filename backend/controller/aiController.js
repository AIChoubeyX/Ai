// import OpenAI from "openai";
// import sql from "../configs/db.js";
// import { clerkClient } from "@clerk/express";
// import axios from "axios";
// import { v2 as cloudinary } from "cloudinary";

// const AI = new OpenAI({
//   apiKey: process.env.GEMINI_API_KEY,
//   baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
// });

// export const generateArticle = async (req, res) => {
//   try {
//     console.log("Received generateArticle request");
//     const { userId } = req.auth();
//     const { prompt, length } = req.body;
//     console.log("Prompt:", prompt, "Length:", length);

//     const response = await AI.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: length,
//     });

//     const content = response.choices[0].message.content;
//     await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'article')`;
//     res.json({ suscess: true, content });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const generateBlogTitle = async (req, res) => {
//   try {
//     console.log("Received generateArticle request");
//     const { userId } = req.auth();
//     const { prompt } = req.body;
//     console.log("Prompt:", prompt);

//     const response = await AI.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 100,
//     });

//     const content = response.choices[0].message.content;
//     await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'blog-title')`;
//     res.json({ suscess: true, content });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const generateImage = async (req, res) => {
//   try {
//     console.log("Received generateArticle request");
//     const { userId } = req.auth();
//     const { prompt, publish } = req.body;
//     console.log("Prompt:", prompt);

//     const formData = new FormData();
//     formData.append("prompt", prompt);
//     const {data} =await axios.post("https://api.openai.com/v1/images/generations", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'x-api-key': process.env.CLIPDROP_API_KEY
//       },
//       responseType: 'arraybuffer'
//     })
//     const base64Image =`data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

//     const { secure_url} = await cloudinary.uploader.upload(base64Image)


//     await sql`INSERT INTO creations (user_id, prompt, content, type, publish) VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})`;
//     res.json({ suscess: true, content: secure_url });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };


import OpenAI from "openai";
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import FormData from "form-data"; // Important for image upload

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

    const base64Image = `data:image/png;base64,${Buffer.from(data, "binary").toString("base64")}`;
    const { secure_url } = await cloudinary.uploader.upload(base64Image);

    await sql`INSERT INTO creations (user_id, prompt, content, type, publish) VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})`;
    res.json({ success: true, content: secure_url });
  } catch (error) {
    console.error("❌ Error in generateImage:", error.message);
    if (error.response) {
      console.error("🧾 Axios response error:", error.response.data);
    }
    res.status(500).json({ success: false, error: error.message });
  }
};
