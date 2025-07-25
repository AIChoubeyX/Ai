// import { Image } from "lucide-react";
// import React, { useState } from "react";
// import { Sparkles } from "lucide-react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const GenerateImages = () => {
//   const imageStyle = [
//     "Realistic",
//     "Ghibli style",
//     "Anime style",
//     "Cartoon style",
//     "Fantasy style",
//     "Realistic style",
//     "3D style",
//     "Potrait style",
//   ];

//   const [selectedStyle, setSelectedStyle] = useState("Realistic");
//   const [input, setInput] = useState("");
//   const [publish, setPublish] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const prompt = ` Generate an image of${input} in ${selectedStyle} style`;

//       const { data } = await axios.post(
//         "/api/ai/generate-image",
//         { prompt, publish },
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
//           <Sparkles className="w-6 text-[#00AD25]" />
//           <h1 className="text-xl font-semibold">AI Image Generator</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Describe your image</p>
//         <textarea
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//           rows={4}
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//           placeholder="Describe your image..."
//           required
//         />
//         <p className="mt-4 text-sm font-medium">Style</p>
//         <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
//           {imageStyle.map((item) => (
//             <span
//               onClick={() => setSelectedStyle(item)}
//               className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
//                 selectedStyle === item
//                   ? "bg-green-50 text-green-700"
//                   : "text-gray-500 border-gray-300"
//               }`}
//               key={item}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="my-6 flex items-center gap-2">
//           <label className="relative cursor-pointer">
//             <input
//               type="checkbox"
//               onChange={(e) => setPublish(e.target.checked)}
//               checked={publish}
//               className="sr-only peer"
//             />
//             <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
//             <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
//           </label>
//           <p className="text-sm">Make this image public</p>
//         </div>
//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00Ad25] to-[#04FF50] text-white py-2 px-4 mt-6
//         text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <Image className="w-6" />
//           )}
//           Generate image
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Image className="w-5 h-5 text-[#00AD25]" />
//           <h1 className="text-xl font-semibold">Generated image</h1>
//         </div>
//         {!content ? (<div className="flx-1 flex justify-center items-center">
//           <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//             <Image className="w-9 h-9" />
//             <p>Enter a topic and click 'Generate image' to get started</p>
//           </div>
//         </div>) : (
//           <div className="mt-3 h-full">
//             <img src={content} alt="image" />
//           </div>
//         )
//         }
        
//       </div>
//     </div>
//   );
// };

// export default GenerateImages;



import { Image, Sparkles } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const GenerateImages = () => {
  const imageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "Realistic style",
    "3D style",
    "Potrait style",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Generate an image of ${input} in ${selectedStyle} style`;

      const { data } = await axios.post(
        "/api/ai/generate-image",
        { prompt, publish },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
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
    }
    setLoading(false);
  };

  const downloadImage = () => {
    if (!content) return;
    
    const link = document.createElement('a');
    link.href = content;
    link.download = `ai-generated-image-${Date.now()}.jpg`;
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
          <Sparkles className="w-6 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        
        <p className="mt-6 text-sm font-medium text-gray-300">Describe your image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="Describe your image..."
          required
        />
        
        <p className="mt-4 text-sm font-medium text-gray-300">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {imageStyle.map((item) => (
            <span
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition-colors ${
                selectedStyle === item
                  ? "bg-green-900/50 text-green-300 border-green-700"
                  : "text-gray-400 border-gray-600 hover:bg-gray-700"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:bg-green-500 transition"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>
          <p className="text-sm text-gray-300">Make this image public</p>
        </div>
        
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <Image className="w-6" />
          )}
          Generate image
        </button>
      </form>

      {/* Right Column - Generated Image */}
      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 shadow-lg min-h-96">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <Image className="w-5 h-5 text-[#00AD25]" />
            <h1 className="text-xl font-semibold">Generated image</h1>
          </div>
          {content && (
            <button 
              onClick={downloadImage}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          )}
        </div>
        
        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Image className="w-9 h-9 opacity-70" />
              <p>Enter a description and click 'Generate image' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-3">
            <img 
              src={content} 
              alt="Generated content" 
              className="w-full rounded-lg border border-gray-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateImages;