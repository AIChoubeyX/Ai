// import { Scissors, Sparkles } from "lucide-react";
// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const RemoveObject = () => {
//   const [input, setInput] = useState("");
//   const [object, setObject] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       if (object.split(" ").length > 1) {
//         return toast("Please enter only one object name");
//       }
//       const formData = new FormData();
//       formData.append("image", input);
//       formData.append("object", object);

//       const { data } = await axios.post(
//         "/api/ai/remove-image-object",
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
//         // toast.error("data.message");
//         toast.error("No content received from the server.");
//       }
//       setLoading(false);
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
//           <Sparkles className="w-6 text-[#4A7AFF]" />
//           <h1 className="text-xl font-semibold">Object Remover</h1>
//         </div>
//         <p className="mt-6 text-sm font-medium">Upload image</p>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           accept="image/*"
//           type="file"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           required
//         />
//         <p className="mt-6 text-sm font-medium">
//           Describe object name to remove
//         </p>
//         <textarea
//           onChange={(e) => setObject(e.target.object)}
//           value={input}
//           rows={4}
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//           placeholder="e.g.,car,fan,flower.."
//           required
//         />

//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports JPG, PNG, and other image formats
//         </p>

//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white py-2 px-4 mt-6
//             text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <Scissors className="w-6" />
//           )}
//           Remove object
//         </button>
//       </form>
//       {/* right col */}

//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Scissors className="w-5 h-5 text-[#4A7AFF]" />
//           <h1 className="text-xl font-semibold">Processed Image</h1>
//         </div>
//         {!content ? (
//           <div className="flx-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <Scissors className="w-9 h-9" />
//               <p>Upload a Image and click 'Remove Object' to get started</p>
//             </div>
//           </div>
//         ) : (
//           <img src={content} alt="image" className=" mt-3 w-full h-full " />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RemoveObject;


// import { Scissors, Sparkles } from "lucide-react";
// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const RemoveObject = () => {
//   const [input, setInput] = useState("");
//   const [object, setObject] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const { getToken } = useAuth();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);

//       if (object.trim().split(" ").length > 1) {
//         setLoading(false);
//         return toast.error("Please enter only one object name");
//       }

//       const formData = new FormData();
//       formData.append("image", input);
//       formData.append("object", object);

//       const { data } = await axios.post(
//         "/api/ai/remove-image-object",
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

//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error.message ||
//           "Something went wrong"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
//       {/* Left column */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
//       >
//         <div className="flex items-center gap-3">
//           <Sparkles className="w-6 text-[#4A7AFF]" />
//           <h1 className="text-xl font-semibold">Object Remover</h1>
//         </div>

//         <p className="mt-6 text-sm font-medium">Upload image</p>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           accept="image/*"
//           type="file"
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
//           required
//         />

//         <p className="mt-6 text-sm font-medium">Describe object name to remove</p>
//         <textarea
//           onChange={(e) => setObject(e.target.value)}
//           value={object}
//           rows={4}
//           className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
//           placeholder="e.g., car, fan, flower..."
//           required
//         />

//         <p className="text-xs text-gray-500 font-light mt-1">
//           Supports JPG, PNG, and other image formats
//         </p>

//         <button
//           disabled={loading}
//           className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer"
//         >
//           {loading ? (
//             <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
//           ) : (
//             <>
//               <Scissors className="w-6" />
//               Remove object
//             </>
//           )}
//         </button>
//       </form>

//       {/* Right column */}
//       <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Scissors className="w-5 h-5 text-[#4A7AFF]" />
//           <h1 className="text-xl font-semibold">Processed Image</h1>
//         </div>

//         {!content ? (
//           <div className="flex-1 flex justify-center items-center">
//             <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
//               <Scissors className="w-9 h-9" />
//               <p>Upload an image and click 'Remove Object' to get started</p>
//             </div>
//           </div>
//         ) : (
//           <img
//             src={content || undefined}
//             alt="Processed"
//             className="mt-3 w-full h-full object-contain"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RemoveObject;


import { Scissors, Sparkles, Download } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveObject = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (object.trim().split(" ").length > 1) {
        setLoading(false);
        return toast.error("Please enter only one object name");
      }

      const formData = new FormData();
      formData.append("image", input);
      formData.append("object", object);

      const { data } = await axios.post(
        "/api/ai/remove-image-object",
        formData,
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
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!content) return;
    
    const link = document.createElement('a');
    link.href = content;
    link.download = `removed-object-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 bg-gray-900">
      {/* Left column - Configuration */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 text-white">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Object Remover</h1>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-300">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          accept="image/*"
          type="file"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-600 file:text-white hover:file:bg-gray-500 transition-colors"
          required
        />

        <p className="mt-6 text-sm font-medium text-gray-300">Describe object name to remove</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="e.g., car, fan, flower..."
          required
        />

        <p className="text-xs text-gray-500 font-light mt-1">
          Supports JPG, PNG, and other image formats
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white py-2 px-4 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <>
              <Scissors className="w-6" />
              Remove object
            </>
          )}
        </button>
      </form>

      {/* Right column - Processed Image */}
      <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg flex flex-col border border-gray-700 shadow-lg min-h-96">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <Scissors className="w-5 h-5 text-[#4A7AFF]" />
            <h1 className="text-xl font-semibold">Processed Image</h1>
          </div>
          {content && (
            <button 
              onClick={downloadImage}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          )}
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Scissors className="w-9 h-9 opacity-70" />
              <p>Upload an image and click 'Remove Object' to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col items-center">
            <img
              src={content}
              alt="Processed"
              className="w-full h-auto max-h-[500px] object-contain rounded-lg border border-gray-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveObject;