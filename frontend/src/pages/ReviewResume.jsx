// import React from "react";
// import { useState } from "react";
// import { FileText, Sparkles } from "lucide-react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";
// import Markdown from "react-markdown";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const ReviewResume = () => {
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("resume", input);

//       const { data } = await axios.post("/api/ai/resume-review", formData, {
//         headers: {
//           Authorization: `Bearer ${await getToken()}`,
//         },
//       });

//       if (data.success) {
//         setContent(data.content);
//       } else {
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
//           <Sparkles className="w-6 text-[#00DA83]" />
//           <h1 className="text-xl font-semibold">Resume review</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Upload Resume</p>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           accept="application/pdf"
//           type="file"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           required
//         />

//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports Pdf only..
//         </p>

//         <button
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white py-2 px-4 mt-6
//             text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <>
//               <FileText className="w-6" />
//               Remove object
//             </>
//           )}
//           Review Resume
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
//         <div className="flex items-center gap-3">
//           <FileText className="w-5 h-5 text-[#00DA83]" />
//           <h1 className="text-xl font-semibold">Analysis Result</h1>
//         </div>
//         {!content ? (
//           <div className="flx-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <FileText className="w-9 h-9" />
//               <p>Upload a Resume and click 'Review Resume' to get started</p>
//             </div>
//           </div>
//         ) : (
//           <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
//             <div className="reset-tw">
//               <Markdown>{content}</Markdown>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewResume;


import React, { useState } from "react";
import { FileText, Sparkles, Copy, ClipboardCheck } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", input);

      const { data } = await axios.post("/api/ai/resume-review", formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error("No content received from the server.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!content) return;
    navigator.clipboard.writeText(content)
      .then(() => {
        toast.success("Copied to clipboard!");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => toast.error("Failed to copy"));
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 bg-gray-900">
      {/* Left Column - Configuration */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 text-white">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>
        
        <p className="mt-6 text-sm font-medium text-gray-300">Upload Resume</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          accept="application/pdf"
          type="file"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-600 file:text-white hover:file:bg-gray-500 transition-colors"
          required
        />

        <p className="text-xs text-gray-500 font-light mt-1">
          Supports PDF only
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <FileText className="w-6" />
          )}
          Review Resume
        </button>
      </form>

      {/* Right Column - Analysis Result */}
      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 shadow-lg min-h-96 max-h-[600px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <FileText className="w-5 h-5 text-[#00DA83]" />
            <h1 className="text-xl font-semibold">Analysis Result</h1>
          </div>
          {content && (
            <button 
              onClick={copyToClipboard}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-1"
            >
              {copied ? (
                <ClipboardCheck className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
        
        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <FileText className="w-9 h-9 opacity-70" />
              <p>Upload a Resume and click 'Review Resume' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-auto">
            <div className="prose prose-invert max-w-none bg-gray-700/30 p-4 rounded-lg">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewResume;