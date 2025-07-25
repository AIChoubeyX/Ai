// import React from "react";
// import { useState } from "react";
// import Markdown from 'react-markdown'

// const CreationItem = ({ item }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div
//       onClick={() => setExpanded(!expanded)}
//       className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
//     >
//       <div className="flex justify-between items-center gap-4">
//         {/* div conataining prompt and date */}
//         <div>
//           <h2>{item.prompt}</h2>
//           <p className="text-gray-500">
//             {item.type}-{new Date(item.created_at).toLocaleDateString()}
//           </p>
//         </div>
//         <button className="bg-[#EFf6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
//           {item.type}
//         </button>
//       </div>
//       {
//       expanded && (
//         <div>
//           {item.type === "image" ? (
//             <div>
//               <img
//                 src={item.content}
//                 alt="image"
//                 className="mt-3 w-full max-w-md"
//               />
//             </div>
//           ) : (
//             <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
//               <div className="reset-tw">
//                 <Markdown>{item.content}</Markdown>
//               </div>
//             </div>
//           )}
//         </div>
//       )
//       }
//     </div>
//   );
// };

// export default CreationItem;


import React from "react";
import { useState } from "react";
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
    >
      <div className="flex justify-between items-center gap-4">
        {/* div containing prompt and date */}
        <div>
          <h2 className="text-gray-100">{item.prompt}</h2>
          <p className="text-gray-400">
            {item.type}-{new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-gray-700 border border-gray-600 text-blue-400 px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {expanded && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="generated content"
                className="mt-3 w-full max-w-md rounded-lg border border-gray-600"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-gray-200">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;