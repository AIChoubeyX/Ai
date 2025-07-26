// import React from "react";
// import { Edit, Sparkles } from "lucide-react";
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";
// import Markdown from 'react-markdown'

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const WriteArticle = () => {
//   const articleLength = [
//     { length: 800, text: "short(500-800 words)" },
//     { length: 1200, text: "medium(800-1200 words)" },
//     { length: 1600, text: "long(1200+ words)" },
//   ];

//   const [selectedLength, setSelectedLength] = useState(articleLength[0]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const prompt = `Write an article about ${input} in ${selectedLength.text} `;

//       const { data } = await axios.post(
//         "/api/ai/generate-article",
//         { prompt, length: selectedLength.length },
//         {
//           headers: {
//             Authorization: `Bearer ${await getToken()}`,
//           },
//         }
//       );
//       if (data) {
//         setContent(data);
//       } else {
//         // toast.error("data.message");
//         toast.error("No content received from the server.");
//       }
//     } catch (error) {
//       // toast.error("error.message");
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
//           <Sparkles className="w-6 text-[#4A74FF]" />
//           <h1 className="text-xl font-semibold">Article Configuration</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Article Topic</p>
//         <input
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//           type="text"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//           placeholder="The Future of Artificial intelligence is ...."
//           required
//         />
//         <p className="mt-4 text-sm font-medium">Article Length</p>
//         <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
//           {articleLength.map((item, index) => (
//             <span
//               onClick={() => setSelectedLength(item)}
//               className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                 selectedLength.text === item.text
//                   ? "bg-blue-50 text-blue-700"
//                   : "text-gray-500 border-gray-300"
//               }`}
//               key={index}
//             >
//               {item.text}
//             </span>
//           ))}
//         </div>
//         <br />
//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white py-2 px-4 mt-6
//         text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className=" w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <Edit className="w-6" />
//           )}
//           Generate Article
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
//         <div className="flex items-center gap-3">
//           <Edit className="w-5 h-5 text-[#4A74FF]" />
//           <h1 className="text-xl font-semibold">Generated article</h1>
//         </div>

//         {!content ? (
//           <div className="flx-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <Edit className="w-9 h-9" />
//               <p>Enter a topic and click 'Generate article' to get started</p>
//             </div>
//           </div>
//         ) : (
//           <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
//             {/* {content} */}
//             <div className="reset-tw">
//              <Markdown>{content?.content || "No content generated yet."}</Markdown>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WriteArticle;

import React from "react";
import { Edit, Sparkles } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "short(500-800 words)" },
    { length: 1200, text: "medium(800-1200 words)" },
    { length: 1600, text: "long(1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Write an article about ${input} in ${selectedLength.text}`;

      const { data } = await axios.post(
        "/api/ai/generate-article",
        { prompt, length: selectedLength.length },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      if (data) {
        setContent(data);
      } else {
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

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 bg-gray-900">
      {/* Left Column - Configuration */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 text-white">
          <Sparkles className="w-6 text-[#4A74FF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-300">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="The Future of Artificial intelligence is ...."
          required
        />

        <p className="mt-4 text-sm font-medium text-gray-300">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition-colors ${
                selectedLength.text === item.text
                  ? "bg-blue-900/50 text-blue-300 border-blue-700"
                  : "text-gray-400 border-gray-600 hover:bg-gray-700"
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>

        <br />
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <Edit className="w-6" />
          )}
          Generate Article
        </button>
      </form>

      {/* Right Column - Generated Content */}
      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 min-h-96 max-h-[600px] shadow-lg">
        <div className="flex items-center gap-3 text-white">
          <Edit className="w-5 h-5 text-[#4A74FF]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Edit className="w-9 h-9 opacity-70" />
              {/* <Edit className="w-9 h-9 opacity-70 z-0 relative" /> */}
              <p>Enter a topic and click 'Generate article' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-scroll text-sm text-gray-200">
            <div className="prose prose-invert max-w-none">
              <Markdown>
                {content?.content || "No content generated yet."}
              </Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteArticle;
