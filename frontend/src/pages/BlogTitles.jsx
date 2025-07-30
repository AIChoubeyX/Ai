// import React from "react";
// import { useState } from "react";
// import { Hash, Sparkles } from "lucide-react";
// import toast from "react-hot-toast";
// import Markdown from "react-markdown";
// import { useAuth } from "@clerk/clerk-react";
// import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const BlogTitles = () => {
//   const blogCategories = [
//     "General",
//     "Technology",
//     "Business",
//     "Health",
//     "Lifestyle",
//     "Eduction",
//     "Travel",
//     "Food",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("General");
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const prompt = `Write a blog title about ${input} in ${selectedCategory}`;

//       const { data } = await axios.post(
//         "/api/ai/generate-blog-title",
//         { prompt },
//         {
//           headers: {
//             Authorization: `Bearer ${await getToken()}`,
//           },
//         }
//       );
//       if (data.success) {
//         setContent(data.content);
//       } else {
//         // toast.error("data.message");
//         toast.error("No content received from the server.");
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error.message ||
//           "Something went wrong"
//       );
//     }
//     setLoading(false);
//   };
//   return (
//     <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
//       {/* left col */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full   max-w-lg p-4 bg-white rounded-lg border border-gray-200"
//       >
//         <div className="flex items-center gap-3">
//           <Sparkles className="w-6 text-[#8E37EB]" />
//           <h1 className="text-xl font-semibold">AI Title Generator</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Keyword</p>
//         <input
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//           type="text"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//           placeholder="The Future of Artificial intelligence is ...."
//           required
//         />
//         <p className="mt-4 text-sm font-medium">Category</p>
//         <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
//           {blogCategories.map((item) => (
//             <span
//               onClick={() => setSelectedCategory(item)}
//               className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                 selectedCategory === item
//                   ? "bg-purple-50 text-purple-700"
//                   : "text-gray-500 border-gray-300"
//               }`}
//               key={item}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//         <br />
//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F3] to-[#8E37EB] text-white py-2 px-4 mt-6
//           text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <Hash className="w-6" />
//           )}
//           Generate title
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Hash className="w-5 h-5 text-[#8E37EB]" />
//           <h1 className="text-xl font-semibold">Generated titles</h1>
//         </div>
//         {!content ? (
//           <div className="flx-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <Hash className="w-9 h-9" />
//               <p>Enter a topic and click 'Generate title' to get started</p>
//             </div>
//           </div>
//         ) : (
//           <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
//             {/* {content} */}
//             <div className="reset-tw">
//               <Markdown>
//                 {content || "No content generated yet."}
//               </Markdown>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogTitles;


import React from "react";
import { useState } from "react";
import { Hash, Sparkles, Copy, Check } from "lucide-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Eduction",
    "Travel",
    "Food",
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  // Copy functionality state
  const [copied, setCopied] = useState(false);

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Write a blog title about ${input} in ${selectedCategory}`;

      const { data } = await axios.post(
        "/api/ai/generate-blog-title",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      if (data.success) {
        setContent(data.content);
      } else {
        // toast.error("data.message");
        toast.error("No content received from the server.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    }
    setLoading(false);
  };

  // Copy functionality
  const handleCopyContent = async () => {
    try {
      await navigator.clipboard.writeText(content || "");
      setCopied(true);
      toast.success("Blog titles copied to clipboard!");
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy content");
    }
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 bg-gray-900">
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 text-white">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-300">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="The Future of Artificial intelligence is ...."
          required
        />
        <p className="mt-4 text-sm font-medium text-gray-300">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition-colors ${
                selectedCategory === item
                  ? "bg-purple-900/50 text-purple-300 border-purple-700"
                  : "text-gray-400 border-gray-600 hover:bg-gray-700"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F3] to-[#8E37EB] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
          ) : (
            <Hash className="w-6" />
          )}
          Generate title
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 min-h-96 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <Hash className="w-5 h-5 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">Generated titles</h1>
          </div>
          
          {/* Copy button - only show when content exists */}
          {content && (
            <button
              onClick={handleCopyContent}
              className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md transition-colors text-gray-300"
              title="Copy generated titles"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Hash className="w-9 h-9 opacity-70" />
              <p className="text-center">Enter a topic and click 'Generate title' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-scroll text-sm text-gray-200">
            <div className="prose prose-invert max-w-none">
              <Markdown>
                {content || "No content generated yet."}
              </Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTitles;