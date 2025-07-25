// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
//       <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6 ">
//         <div class="md:max-w-96">
//           <img
//             className="h-9"
//             src={assets.logo}
//             alt="logo"
//           />
//           <p className="mt-6 text-sm">
//             Experience the power of AI with our cutting-edge tools. <br /> Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
//           </p>
//         </div>
//         <div className="flex-1 flex items-start md:justify-end gap-20">
//           <div>
//             <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
//             <ul className="text-sm space-y-2">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About us</a>
//               </li>
//               <li>
//                 <a href="#">Contact us</a>
//               </li>
//               <li>
//                 <a href="#">Privacy policy</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-semibold text-gray-800 mb-5">
//               Subscribe to our newsletter
//             </h2>
//             <div className="text-sm space-y-2">
//               <p>
//                 The latest news, articles, and resources, sent to your inbox
//                 weekly.
//               </p>
//               <div className="flex items-center gap-2 pt-4">
//                 <input
//                   className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
//                   type="email"
//                   placeholder="Enter your email"
//                 />
//                 <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <p className="pt-4 text-center text-xs md:text-sm pb-5">
//         Copyright 2025 © Hackaholics. All Right Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { assets } from "../assets/assets";
// import Particles from "./Particles"; // Same path as AiTools.jsx

// const Footer = () => {
//   return (
//     <footer className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-20 xl:px-32 py-24 mt-20">
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

//       {/* Main Content */}
//       <div className="relative z-10 w-full text-gray-400">
//         <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
//           {/* Logo and Description */}
//           <div className="md:max-w-md">
//             <img className="h-9 mb-6" src={assets.logo} alt="Logo" />
//             <p className="text-sm">
//               Experience the power of AI with our cutting-edge tools.
//               <br />
//               Transform your content creation with our suite of premium AI
//               tools. Write articles, generate images, and enhance your
//               workflow.
//             </p>
//           </div>

//           {/* Links and Newsletter */}
//           <div className="flex-1 flex flex-col sm:flex-row gap-16 md:justify-end">
//             {/* Company Links */}
//             <div>
//               <h2 className="text-white font-semibold mb-5">Company</h2>
//               <ul className="text-sm space-y-2">
//                 <li><a href="#" className="hover:text-white transition">Home</a></li>
//                 <li><a href="#" className="hover:text-white transition">About us</a></li>
//                 <li><a href="#" className="hover:text-white transition">Contact us</a></li>
//                 <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
//               </ul>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h2 className="text-white font-semibold mb-5">
//                 Subscribe to our newsletter
//               </h2>
//               <p className="text-sm mb-4">
//                 The latest news, articles, and resources, sent to your inbox
//                 weekly.
//               </p>
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full sm:w-auto h-9 px-3 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <button className="bg-indigo-600 hover:bg-indigo-700 transition w-28 h-9 text-white rounded">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright */}
//         <p className="text-center text-sm text-gray-500 pt-6">
//           © 2025 Hackaholics. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { assets } from "../assets/assets";
import Particles from "./Particles"; // Make sure this path is correct

const cardsData = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    date: "April 20, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
  },
];

const CreateCard = ({ card }) => (
  <div className="bg-[#111] text-white border border-gray-700 p-4 rounded-lg mx-4 shadow-lg w-72 shrink-0 transition-all duration-200 hover:scale-105">
    <div className="flex gap-2">
      <img className="size-11 rounded-full" src={card.image} alt="User" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="text-white font-semibold">{card.name}</p>
          <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#6c63ff" />
          </svg>
        </div>
        <span className="text-xs text-gray-400">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-300">
      Radiant made undercutting all of our competitors an absolute breeze.
    </p>
    <div className="flex items-center justify-between text-gray-500 text-xs">
      <div className="flex items-center gap-1">
        <span>Posted on</span>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6c63ff]"
        >
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
            <circle cx="5.5" cy="5" r="5" fill="currentColor" />
          </svg>
        </a>
      </div>
      <p>{card.date}</p>
    </div>
  </div>
);

const TestimonialFooter = () => {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Shared Particles Background */}
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

      {/* KEYFRAMES for marquee */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Testimonials Section */}
      <section className="relative z-10 w-full py-20">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-semibold">What Our Users Say</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Real feedback from our amazing users all over the world.
          </p>
        </div>

        <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          <div className="marquee-inner flex min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        </div>

        <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 w-full px-4 sm:px-20 xl:px-32 py-24 mt-12 text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
          {/* Logo + Description */}
          <div className="md:max-w-md">
            <img className="h-9 mb-6" src={assets.logo} alt="Logo" />
            <p className="text-sm">
              Experience the power of AI with our cutting-edge tools.
              <br />
              Transform your content creation with our suite of premium AI
              tools. Write articles, generate images, and enhance your
              workflow.
            </p>
          </div>

          {/* Links + Newsletter */}
          <div className="flex-1 flex flex-col sm:flex-row gap-16 md:justify-end">
            {/* Company Links */}
            <div>
              <h2 className="text-white font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact us</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
              </ul>
            </div>

            {/* Newsletter Form */}
            <div>
              <h2 className="text-white font-semibold mb-5">
                Subscribe to our newsletter
              </h2>
              <p className="text-sm mb-4">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto h-9 px-3 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 transition w-28 h-9 text-white rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 pt-6">
          © 2025 Hackaholics. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default TestimonialFooter;
