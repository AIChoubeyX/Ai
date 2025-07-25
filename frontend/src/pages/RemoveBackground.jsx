// import { Eraser, Sparkles } from "lucide-react";
// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const RemoveBackground = () => {
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("image", input);
//     const { data } = await axios.post("/api/ai/remove-image-background", formData, {
//       headers: {
//         Authorization: `Bearer ${await getToken()}`,
//       },
//     });
//     if (data.success) {
//       setContent(data.content);
//     } else {
//       // toast.error("data.message");
//       toast.error("No content received from the server.");
//     }
//     setLoading(false);
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
//           <Sparkles className="w-6 text-[#FF4938]" />
//           <h1 className="text-xl font-semibold">Background Remover</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Upload image</p>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           accept="image/*"
//           type="file"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           required
//         />

//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports JPG, PNG, and other image formats
//         </p>

//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white py-2 px-4 mt-6
//             text-sm rounded-lg cursor-pointer">
//              {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//            <Eraser className="w-6" />
//           )}
          
//           Remove background
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Eraser className="w-5 h-5 text-[#FF4938]" />
//           <h1 className="text-xl font-semibold">Processed Image</h1>
//         </div>
//         {
//           !content ? (<div className="flx-1 flex justify-center items-center">
//           <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//             <Eraser className="w-9 h-9" />
//             <p>Select a Image and click 'Remove Background' to get started</p>
//           </div>
//         </div>) : (
//            <div className="mt-3 h-full w-full">
//             <img src={content} alt="image" />
//           </div>
//         )
//         }
        
//       </div>
//     </div>
//   );
// };

// export default RemoveBackground;


// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import { toast } from "react-hot-toast";
// import { Eraser, Sparkles } from "lucide-react";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const RemoveBackground = () => {
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("image", input);
//       const { data } = await axios.post(
//         "/api/ai/remove-image-background",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${await getToken()}`,
//           },
//         }
//       );
//       if (data.success) {
//         setContent(data.content);
//       } else {
//         toast.error("No content received from the server.");
//       }
//       setLoading(false);
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error.message ||
//           "Something went wrong"
//       );
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-full overflow-y-auto p-6 flex flex-wrap gap-6 text-slate-700">
//       {/* Left Column - Form */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full md:max-w-lg p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
//       >
//         <div className="flex items-center gap-3">
//           <Sparkles className="w-6 text-[#FF4938]" />
//           <h1 className="text-2xl font-semibold">Background Remover</h1>
//         </div>

//         <label className="mt-6 text-sm font-medium block">Upload image</label>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           accept="image/*"
//           type="file"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           required
//         />

//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports JPG, PNG, and other image formats
//         </p>

//         <button
//           disabled={loading}
//           className={`w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white py-2 px-4 mt-6 text-sm rounded-lg transition ${
//             loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
//           }`}
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <Eraser className="w-5" />
//           )}
//           {loading ? "Processing..." : "Remove Background"}
//         </button>
//       </form>

//       {/* Right Column - Output */}
//       <div className="w-full md:max-w-lg p-6 bg-white rounded-xl border border-gray-200 shadow-sm min-h-96 flex flex-col">
//         <div className="flex items-center gap-3 mb-4">
//           <Eraser className="w-5 h-5 text-[#FF4938]" />
//           <h1 className="text-2xl font-semibold">Processed Image</h1>
//         </div>

//         {!content ? (
//           <div className="flex-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-3 text-gray-400">
//               <Eraser className="w-9 h-9" />
//               <p className="text-center px-2">
//                 Select an image and click <b>“Remove Background”</b> to get
//                 started.
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center gap-4 w-full mt-2">
//             <img
//               src={content}
//               alt="Processed"
//               className="rounded-md border border-gray-100 shadow max-w-full"
//             />
//             <a
//               href={content}
//               download="creonix_processed.png"
//               className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition"
//             >
//               Download Image
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RemoveBackground;


import { Eraser, Sparkles, Download } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", input);
      const { data } = await axios.post("/api/ai/remove-image-background", formData, {
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

  const downloadImage = () => {
    if (!content) return;
    
    const link = document.createElement('a');
    link.href = content;
    link.download = `no-background-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 bg-gray-900">
      {/* Left Column - Configuration */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 text-white">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Remover</h1>
        </div>
        
        <p className="mt-6 text-sm font-medium text-gray-300">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          accept="image/*"
          type="file"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-600 file:text-white hover:file:bg-gray-500 transition-colors"
          required
        />

        <p className="text-xs text-gray-500 font-light mt-1">
          Supports JPG, PNG, and other image formats
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <Eraser className="w-6" />
          )}
          Remove background
        </button>
      </form>

      {/* Right Column - Processed Image */}
      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 shadow-lg min-h-96">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <Eraser className="w-5 h-5 text-[#FF4938]" />
            <h1 className="text-xl font-semibold">Processed Image</h1>
          </div>
          {content && (
            <button 
              onClick={downloadImage}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-1"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          )}
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Eraser className="w-9 h-9 opacity-70" />
              <p>Select an image and click 'Remove Background' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col items-center">
            <img 
              src={content} 
              alt="Background removed" 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg border border-gray-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;