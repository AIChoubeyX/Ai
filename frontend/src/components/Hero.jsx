// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png) bg-cover bg-no-repeat min-h-screen">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]  ">
//           Create amazing Content
//           <br /> with <span className="text-primary"> Ai tools</span>{" "}
//         </h1>
//         <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs text-grey-600">
//           Transform your content creation with our suite of premium Ai tools.
//           Write articles, generate images, and more
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
//         <button
//           onClick={() => navigate("/ai")}
//           className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
//         >
//           Start Creating now
//         </button>
//         <button className="bg-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer border border-grey-300 ">
//           Watch demo
//         </button>
//       </div>
//       <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
//         <img src={assets.user_group} alt="" className="h-8"/> Trusted by 10k+ people
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
// import Particles from "./Particles";
// import creonixLogo from "../assets/creonixLogo.png";
// const Hero = () => {
//   const navigate = useNavigate();
// //
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
//       {/* Background Particles */}
//       <div className="absolute inset-0 z-0">
//         <Particles
//           particleColors={["#ffffff", "#00ffff", "#6c63ff"]} // Light particles on dark bg
//           particleCount={200}
//           particleSpread={10}
//           speed={0.15}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 sm:px-20 xl:px-32 inline-flex flex-col w-full justify-center text-center">
//         <div className="flex-shrink-0">
//                   <img
//                     src={creonixLogo}
//                     alt="Creonix Logo"
//                     className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
//                     onClick={() => navigate("/")}
//                     loading="lazy"
//                   />
//                 </div>
//         <div className="mb-6">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] text-white">
//             Create amazing Content
//             <br />
//             with <span className="text-[#6c63ff]">Ai tools</span>
//           </h1>
//           <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs text-gray-400">
//             Transform your content creation with our suite of premium Ai tools.
//             Write articles, generate images, and more
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
//           <button
//             onClick={() => navigate("/ai")}
//             className="bg-[#6c63ff] text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer"
//           >
//             Start Creating now
//           </button>
//           <button className="bg-transparent px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer border border-gray-500 text-white">
//             Watch demo
//           </button>
//         </div>
//         <div className="flex items-center gap-4 mt-8 mx-auto text-gray-400">
//           <img src={assets.user_group} alt="user group" className="h-8" />
//           Trusted by 10k+ people
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
// import Particles from "./Particles";
// import creonixLogo from "../assets/creonixLogo.png";
// import TextType from "./TextType";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
//       {/* Background Particles */}
//       <div className="absolute inset-0 z-0">
//         <Particles
//           particleColors={["#ffffff", "#00ffff", "#6c63ff"]}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.15}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 sm:px-20 xl:px-32 inline-flex flex-col w-full justify-center text-center">
//         {/* Welcome Line */}
//        <div className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#aaa] tracking-wide">
//           <TextType
//             text={[
//               "Welcome to Creonix — Your Gateway to Smarter Content Creation",
//               "Unleash the power of AI for your content workflow",
//               "Join 10k+ creators using Creonix",
//             ]}
//             typingSpeed={60}
//             pauseDuration={2000}
//             showCursor={true}
//             cursorCharacter="|"
//             className="text-[#aaa] font-medium"
//           />
//         </div>

//         {/* Logo */}
//         <div className="flex-shrink-0 mb-4">
//           <img
//             src={creonixLogo}
//             alt="Creonix Logo"
//             className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
//             onClick={() => navigate("/")}
//             loading="lazy"
//           />
//         </div>

//         {/* Main Heading */}
//         <div className="mb-6">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-tight text-white">
//             Create amazing Content
//             <br />
//             with <span className="text-[#6c63ff]">Ai tools</span>
//           </h1>
//           <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto text-sm sm:text-base text-gray-400">
//             Transform your content creation with our suite of premium Ai tools.
//             Write articles, generate images, and more.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 text-sm">
//           <button
//             onClick={() => navigate("/ai")}
//             className="bg-[#6c63ff] text-white px-8 sm:px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition"
//           >
//             Start Creating now
//           </button>
//           <button className="bg-transparent px-8 sm:px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition border border-gray-500 text-white">
//             Watch demo
//           </button>
//         </div>

//         {/* Trust Line */}
//         <div className="flex items-center gap-4 mt-8 mx-auto text-gray-400 text-sm sm:text-base">
//           <img src={assets.user_group} alt="user group" className="h-8" />
//           Trusted by 10k+ people
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import Particles from "./Particles";
import creonixLogo from "../assets/creonixLogo.png";
import TextType from "./TextType";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
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

      {/* Profile Section - Left Side
      <div className="absolute top-1/2 left-6 sm:left-20 xl:left-32 transform -translate-y-1/2 z-20">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 bg-gradient-to-r from-[#7B61FF] to-[#6344FF] text-white font-medium py-2 px-6 sm:py-2.5 sm:px-8 rounded-full shadow-md hover:brightness-110 transition-all duration-200"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-20 xl:px-32 inline-flex flex-col w-full justify-center text-center">
        {/* Welcome Line */}
        <div className="mb-4  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#aaa] tracking-wide">
          <TextType
            text={[
              "Welcome to Creonix — Your Gateway to Smarter Content Creation",
              "Unleash the power of AI for your content workflow",
              // "Join 10k+ creators using Creonix",
            ]}
            typingSpeed={60}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-[#aaa] font-medium"
          />
        </div>

        {/* Logo */}
        {/* <div className="flex-shrink-0 mb-4">
          <img
            src={creonixLogo}
            alt="Creonix Logo"
            className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer mx-auto"
            onClick={() => navigate("/")}
            loading="lazy"
          />
        </div> */}

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="mt-9 text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-tight text-white">
            Create Beyond Limits
            <br />
            with <span className="text-[#6c63ff]">Creonix</span>
          </h1>
          <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto text-sm sm:text-base text-gray-400">
            Transform your content creation with our suite of premium Ai tools.
            Write articles, generate images, and more.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <button
            onClick={() => navigate("/ai")}
            className="bg-[#6c63ff] text-white px-8 sm:px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            Start Creating now
          </button>
          <button className="bg-transparent px-8 sm:px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition border border-gray-500 text-white">
            Watch demo
          </button>
        </div>

        {/* Trust Line */}
        <div className="flex items-center gap-4 mt-8 mx-auto text-gray-400 text-sm sm:text-base">
          <img src={assets.user_group} alt="user group" className="h-8" />
          Trusted by 10k+ people
        </div>
      </div>
    </div>
  );
};

export default Hero;