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

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";
import creonixLogo from "../assets/creonixLogo.png";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-ful px-8 min-h-14 flex items-center justify-between border-b border-gray-200 cursor-pointer">
        {/* ✅ Larger logo with proper sizing */}
        <div className="flex-shrink-0">
          <img
            src={creonixLogo}
            alt="Creonix Logo"
            onClick={() => navigate("/")}
            className="h-12 sm:h-14 md:h-16 lg:h-30 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
          />
        </div>

        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
