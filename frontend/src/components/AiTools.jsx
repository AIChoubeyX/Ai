// import React from "react";
// import { AiToolsData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";

// const AiTools = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();

//   return (
//     <div className="px-4 sm:px-20 xl:px-32 my-24">
//       <div className="text-center">
//         <h2 className="text-slate-700 text-[42px] font-semibold">
//           Powerful AI Tools
//         </h2>
//         <p className="text-grey-500 max-w-lg mx-auto">
//           Everthing you need to create, enhance and optimize your content with
//           cutting-edge AI technologies
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center mt-10">
//         {AiToolsData.map((tool, index) => (
//           <div
//             key={index}
//             className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:translate-y-1 transition-all
//             duration-300 cursor-pointer"
//             onClick={() => user && navigate(tool.path)}
//           >
//             <tool.Icon
//               className="w-12 h-12 p-3 text-white rounded-xl"
//               style={{
//                 background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
//               }}
//             />
//             <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
//             <p className="text-gray-400 text-sm max-w-[95%]">
//               {tool.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AiTools;


import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Particles from "./Particles"; // Make sure it's the same path as Hero

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-20 xl:px-32 py-24">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#00ffff", "#6c63ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-[42px] font-semibold text-white">
          Powerful AI Tools
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mt-2">
          Everything you need to create, enhance and optimize your content with
          cutting-edge AI technologies.
        </p>
      </div>

      {/* Tools Cards */}
      <div className="relative z-10 flex flex-wrap justify-center mt-12 gap-6">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-6 w-72 rounded-xl bg-[#151a26] shadow-md border border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl mb-4"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
            <p className="text-gray-400 text-sm mt-2">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
