// import React from "react";
// import { useUser, useClerk, Protect } from "@clerk/clerk-react";
// import {
//   Eraser,
//   FileText,
//   Hash,
//   House,
//   Image,
//   LogOut,
//   Scissors,
//   SquarePen,
//   Users,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { to: "/ai", label: "Dashboard", Icon: House },
//   { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
//   { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
//   { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
//   { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
//   { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
//   { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
//   { to: "/ai/community", label: "Community", Icon: Users },
// ];

// const Sidebar = ({ sidebar, setSidebar }) => {
//   const { user } = useUser();
//   const { signOut, openUserProfile } = useClerk();

//   return (
//     <div
//       className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
//         sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="my-7 w-full">
//         <img
//           src={user.imageUrl}
//           alt="User avatar"
//           className="w-13 rounded-full mx-auto"
//         />
//         <h1 className="mt-1 text-center">{user.fullName}</h1>
//         <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
//           {navItems.map(({ to, label, Icon }) => (
//             <NavLink
//               key={to}
//               to={to}
//               end={to === "/ai"}
//               onClick={() => setSidebar(false)}
//               className={({ isActive }) =>
//                 `px-3.5 py-2.5 flex items-center gap-3 rounded ${
//                   isActive
//                     ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
//                     : ""
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
//                   {label}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//       <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
//         <div
//           onClick={openUserProfile}
//           className="flex gap-2 items-center cursor-pointer"
//         >
//           <img src={user.imageUrl} className="w-8 rounded-full" alt="" />
//           <div>
//             <h1 className="text-sm font-medium">{user.fullName}</h1>
            
//           </div>
//         </div>

//         <LogOut
//           onClick={signOut}
//           className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { useUser, useClerk, Protect } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-gray-900 border-r border-gray-700 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 z-50 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-13 rounded-full mx-auto border-2 border-gray-600"
        />
        <h1 className="mt-1 text-center text-white">{user.fullName}</h1>
        <div className="px-6 mt-5 text-sm font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-700 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img 
            src={user.imageUrl} 
            className="w-8 rounded-full border border-gray-600" 
            alt="User" 
          />
          <div>
            <h1 className="text-sm font-medium text-white">{user.fullName}</h1>
          </div>
        </div>

        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-white transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;


// import React, { useState, useEffect } from "react"; // CHANGED: Added useState and useEffect for scroll handling
// import { useUser, useClerk, Protect } from "@clerk/clerk-react";
// import {
//   Eraser,
//   FileText,
//   Hash,
//   House,
//   Image,
//   LogOut,
//   Scissors,
//   SquarePen,
//   Users,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { to: "/ai", label: "Dashboard", Icon: House },
//   { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
//   { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
//   { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
//   { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
//   { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
//   { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
//   { to: "/ai/community", label: "Community", Icon: Users },
// ];

// const Sidebar = ({ sidebar, setSidebar }) => {
//   const { user } = useUser();
//   const { signOut, openUserProfile } = useClerk();
  
//   // CHANGED: Added state to track scroll position
//   const [scrollY, setScrollY] = useState(0);

//   // CHANGED: Added scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`w-60 bg-gray-900 border-r border-gray-700 flex flex-col justify-between items-center 
//         ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
//         transition-all duration-300 ease-in-out
//         fixed top-0 left-0 h-screen z-50`} // CHANGED: Added fixed positioning and full screen height
//     >
//       <div className="my-7 w-full">
//         <img
//           src={user.imageUrl}
//           alt="User avatar"
//           className="w-13 rounded-full mx-auto border-2 border-gray-600"
//         />
//         <h1 className="mt-1 text-center text-white">{user.fullName}</h1>
//         <div className="px-6 mt-5 text-sm font-medium">
//           {navItems.map(({ to, label, Icon }) => (
//             <NavLink
//               key={to}
//               to={to}
//               end={to === "/ai"}
//               onClick={() => setSidebar(false)}
//               className={({ isActive }) =>
//                 `px-3.5 py-2.5 flex items-center gap-3 rounded ${
//                   isActive
//                     ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
//                     : "text-gray-300 hover:bg-gray-800"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
//                   {label}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>
//       </div>
      
//       {/* CHANGED: Added transform based on scroll position to slide down the bottom menu */}
//       <div 
//         className="w-full border-t border-gray-700 p-4 px-7 flex items-center justify-between transition-transform duration-300 ease-in-out"
//         style={{
//           transform: `translateY(${Math.min(scrollY * 0.1, 20)}px)` // Slides down as user scrolls
//         }}
//       >
//         <div
//           onClick={openUserProfile}
//           className="flex gap-2 items-center cursor-pointer"
//         >
//           <img 
//             src={user.imageUrl}
//             className="w-8 rounded-full border border-gray-600"
//             alt="User"
//           />
//           <div>
//             <h1 className="text-sm font-medium text-white">{user.fullName}</h1>
//           </div>
//         </div>

//         <LogOut
//           onClick={signOut}
//           className="w-4.5 text-gray-400 hover:text-white transition cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;