// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import Sidebar from "../components/Sidebar";
// import { SignIn, useUser } from "@clerk/clerk-react";
// import creonixLogo from "../assets/creonixLogo.png";

// const Layout = () => {

//   const navigate = useNavigate();
//   const [sidebar, setSidebar] = useState(false);
//   const {user} = useUser()

//   return user ? (
//     <div className="flex flex-col items-start justify-start h-screen">
//       <nav className="w-ful px-8 min-h-14 flex items-center justify-between border-b border-gray-200 cursor-pointer">
//         <img src={creonixLogo} alt="" onClick={() => navigate("/")} />
//         {sidebar ? (
//           <X
//             onClick={() => setSidebar(false)}
//             className="w-6 h-6 text-gray-600 sm:hidden"
//           />
//         ) : (
//           <Menu
//             onClick={() => setSidebar(true)}
//             className="w-6 h-6 text-gray-600 sm:hidden"
//           />
//         )}
//       </nav>
//       <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
//         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
//         <div className="flex-1 bg-[#F4F7FB]">
//            <Outlet />

//         </div>
//       </div>

//     </div>
//   ) : (
//     <div className="flex items-center justify-center h-screen">
//       <SignIn />
//     </div>
//   )
// };

// export default Layout;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import Sidebar from "../components/Sidebar";
// import { SignIn, useUser } from "@clerk/clerk-react";
// import creonixLogo from "../assets/creonixLogo.png";

// const Layout = () => {
//   const navigate = useNavigate();
//   const [sidebar, setSidebar] = useState(false);
//   const { user } = useUser();

//   return user ? (
//     <div className="flex flex-col items-start justify-start h-screen">
//       <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 cursor-pointer">
//         {/* ✅ Larger logo with proper sizing */}
//         <div className="flex-shrink-0">
//           <img
//             src={creonixLogo}
//             alt="Creonix Logo"
//             onClick={() => navigate("/")}
//             className="h-12 sm:h-14 md:h-16 lg:h-30 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
//           />
//         </div>

//         {sidebar ? (
//           <X
//             onClick={() => setSidebar(false)}
//             className="w-6 h-6 text-gray-600 sm:hidden"
//           />
//         ) : (
//           <Menu
//             onClick={() => setSidebar(true)}
//             className="w-6 h-6 text-gray-600 sm:hidden"
//           />
//         )}
//       </nav>
//       <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
//         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
//         <div className="flex-1 bg-[#F4F7FB]">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="flex items-center justify-center h-screen">
//       <SignIn />
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";
import creonixLogo from "../assets/creonixLogo.png";
import RotatingText from "./RotatingText";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen bg-gray-900">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-700  bg-gray-800/90 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={creonixLogo}
            alt="Creonix Logo"
            onClick={() => navigate("/")}
            className="h-12 sm:h-14 md:h-16 lg:h-30 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105 hover:brightness-110 "
          />
        </div>

        <div className="flex flex-1 justify-center items-center">
          {/* Completely static text - fixed position */}
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-200 mr-5 sm:mr-3 md:mr-4 lg:mr-5">
            Empowering Ideas with AI
          </span>

          {/* Blue box with rotating keywords - moves independently */}
          <RotatingText
            texts={[
              "Create",
              "Inspire",
              "Edit",
              "Code",
              "Design",
              "Generate",
              "Write",
            ]}
            mainClassName="px-2 sm:px-3 md:px-4 lg:px-5 bg-blue-600 text-white overflow-hidden py-1 sm:py-1.5 md:py-2 lg:py-2.5 justify-center rounded-lg shadow-lg border border-blue-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            staggerFrom={"first"}
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.08}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 lg:pb-1.5"
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 250,
              mass: 0.5,
            }}
            rotationInterval={3500}
            noInitialDelay={true}
          />
        </div>
        {/* Mobile Menu Toggle */}
        <div className="flex-shrink-0">
          {sidebar ? (
            <X
              onClick={() => setSidebar(false)}
              className="w-6 h-6 text-gray-300 hover:text-white sm:hidden transition-colors duration-200"
            />
          ) : (
            <Menu
              onClick={() => setSidebar(true)}
              className="w-6 h-6 text-gray-300 hover:text-white sm:hidden transition-colors duration-200"
            />
          )}
        </div>
      </nav>

      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-gray-900">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <SignIn />
    </div>
  );
};

export default Layout;


