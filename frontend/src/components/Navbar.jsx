// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import creonixLogo from "../assets/creonixLogo.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   return (
   
//     <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
//       {/* ✅ Optimized logo with responsive sizing and better fit */}
//       <div className="flex-shrink-0">
//         <img
//           src={creonixLogo}
//           alt="Creonix Logo"
//           className="h-8 sm:h-10 md:h-12 lg:h-25 w-auto object-contain transition-all duration-200 hover:scale-105 hover:brightness-110"
//           onClick={() => navigate("/")}
//           loading="lazy"
//         />
//       </div>
//       {user ? (
//         <UserButton />
//       ) : (
//         <button
//           onClick={openSignIn}
//           className="flex justify-center items-center gap-2 bg-[#12B7AC] text-white py-2.5 px-10 rounded-full cursor-pointer"
//         >
//           Get Started <ArrowRight className="w-4 h-4" />
//         </button>
//       )}
//     </div>
//   );
// };
// export default Navbar;

// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import creonixLogo from "../assets/creonixLogo.png";


// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { openSignIn } = useClerk();

//   return (
//     <div className="relative z-50 w-full overflow-hidden">
//       {/* Shape Background (to match starfield-style Hero) */}
    

//       {/* Navbar Content */}
//       <div className="flex justify-between items-center py-4 px-6 sm:px-20 xl:px-32 backdrop-blur-xl bg-black/70 shadow-lg border-b border-white/10 rounded-b-xl">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src={creonixLogo}
//             alt="Creonix Logo"
//             className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
//             onClick={() => navigate("/")}
//             loading="lazy"
//           />
//         </div>

//         {/* Get Started / User */}
//         {user ? (
//           <UserButton afterSignOutUrl="/" />
//         ) : (
//           <button
//             onClick={openSignIn}
//             className="flex items-center gap-2 bg-gradient-to-r from-[#7B61FF] to-[#6344FF] text-white font-medium py-2 px-6 sm:py-2.5 sm:px-8 rounded-full shadow-md hover:brightness-110 transition-all duration-200"
//           >
//             Get Started <ArrowRight className="w-4 h-4" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import creonixLogo from "../assets/creonixLogo.png";
// import RotatingText from './RotatingText';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { openSignIn } = useClerk();

//   return (
//     <div className="relative z-50 w-full overflow-hidden">
//       {/* Shape Background (to match starfield-style Hero) */}
      
//       {/* Navbar Content */}
//       <div className="flex justify-between items-center py-4 px-6 sm:px-20 xl:px-32 backdrop-blur-xl bg-black/70 shadow-lg border-b border-white/10 rounded-b-xl">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src={creonixLogo}
//             alt="Creonix Logo"
//             className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
//             onClick={() => navigate("/")}
//             loading="lazy"
//           />
//         </div>

//         {/* Center - RotatingText */}
//         <div className="flex-1 flex justify-center">
//           <RotatingText
//             texts={['React', 'Bits', 'Is', 'Cool!']}
//             mainClassName="px-2 sm:px-2 md:px-3 bg-gray-800 text-white border border-gray-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
//             staggerFrom={"last"}
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-120%" }}
//             staggerDuration={0.025}
//             splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//             transition={{ type: "spring", damping: 30, stiffness: 400 }}
//             rotationInterval={2000}
//           />
//         </div>

//         {/* Get Started / User */}
//         <div className="flex-shrink-0">
//           {user ? (
//             <UserButton afterSignOutUrl="/" />
//           ) : (
//             <button
//               onClick={openSignIn}
//               className="flex items-center gap-2 bg-gradient-to-r from-[#7B61FF] to-[#6344FF] text-white font-medium py-2 px-6 sm:py-2.5 sm:px-8 rounded-full shadow-md hover:brightness-110 transition-all duration-200"
//             >
//               Get Started <ArrowRight className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
