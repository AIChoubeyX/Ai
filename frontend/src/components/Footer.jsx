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
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    date: "April 20, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    date: "May 10, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    date: "June 5, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
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
          <svg
            className="mt-0.5"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
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
          <h2 className="text-white text-3xl font-semibold">
            What Our Users Say
          </h2>
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
          {/* About Me Section - Replace the logo + description section */}
          <div className="md:max-w-md">
            {/* About Me Heading */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {/* 
      Heading customization:
      - text-2xl: Font size (can change to text-xl, text-3xl, text-4xl)
      - font-bold: Font weight (can change to font-medium, font-semibold)
      - mb-6: Bottom margin (can adjust to mb-4, mb-8, mb-10)
      - Colors: text-gray-800 dark:text-white (customize as needed)
    */}
              About Me
            </h2>

            {/* Profile Photo Container */}
            <div className="flex justify-center mb-6">
              {/* 
      Profile photo wrapper:
      - flex justify-center: Centers the image horizontally
      - mb-6: Bottom margin (can adjust to mb-4, mb-8)
    */}
              <img
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                src="/path-to-your-photo.jpg"
                alt="Your Name - Profile Photo"
                /*
        Profile photo styling:
        - w-32 h-32: Size 128px x 128px (can change to w-24 h-24, w-40 h-40, w-48 h-48)
        - rounded-full: Makes it circular
        - object-cover: Ensures image fits well in circle
        - border-4: Border thickness (can change to border-2, border-8)
        - border-gray-200: Border color (customize as needed)
        - shadow-lg: Drop shadow (can change to shadow-md, shadow-xl)
        - hover:shadow-xl: Hover effect
        - transition-shadow duration-300: Smooth transition
        
        IMPORTANT: Replace "/path-to-your-photo.jpg" with your actual image path
      */
              />
            </div>

            {/* About Me Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
              {/* 
      Description styling:
      - text-sm: Font size (can change to text-base, text-lg)
      - text-gray-600: Text color (customize as needed)
      - text-center: Center aligned text
      - mb-6: Bottom margin
      - leading-relaxed: Line height for better readability
      
      CUSTOMIZE THIS TEXT WITH YOUR OWN DESCRIPTION:
    */}
              Passionate full-stack developer with expertise in modern web
              technologies. I love creating innovative solutions and sharing
              knowledge with the community. Always excited to work on
              challenging projects and learn new technologies.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              {/* 
      Social links container:
      - flex: Horizontal layout
      - justify-center: Center alignment
      - space-x-4: Horizontal spacing between icons (can change to space-x-2, space-x-6)
    */}

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                /* REPLACE: Change "yourusername" to your actual Instagram username */
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  {/* 
          Instagram icon styling:
          - w-10 h-10: Size 40px x 40px (can change to w-8 h-8, w-12 h-12)
          - bg-gradient-to-br: Instagram brand gradient
          - rounded-full: Circular shape
          - hover:scale-110: Hover zoom effect
          - transition-transform: Smooth animation
        */}
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                /* REPLACE: Change "yourusername" to your actual Twitter username */
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                /* REPLACE: Change "yourusername" to your actual LinkedIn username */
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                /* REPLACE: Change "yourusername" to your actual GitHub username */
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* 
CUSTOMIZATION GUIDE:

1. REPLACE YOUR INFORMATION:
   - Change the heading "About Me" to your preference
   - Replace "/path-to-your-photo.jpg" with your actual photo path
   - Update the description text with your own bio
   - Replace all "yourusername" in social links with your actual usernames

2. SIZE ADJUSTMENTS:
   - Profile photo: w-32 h-32 (128px) - can use w-24 h-24, w-40 h-40, w-48 h-48
   - Social icons: w-10 h-10 (40px) - can use w-8 h-8, w-12 h-12
   - Text sizes: text-2xl (heading), text-sm (description) - adjust as needed

3. SPACING:
   - mb-6: Bottom margins - can adjust to mb-4, mb-8, mb-10
   - space-x-4: Social icon spacing - can use space-x-2, space-x-6

4. COLORS:
   - Heading: text-gray-800 dark:text-white
   - Description: text-gray-600 dark:text-gray-300
   - Social icons have brand colors (Instagram gradient, Twitter black, etc.)

5. RESPONSIVE DESIGN:
   - The md:max-w-md ensures it fits well on all screen sizes
   - All elements are responsive and will adapt to mobile/tablet/desktop

6. HOVER EFFECTS:
   - Profile photo: shadow grows on hover
   - Social icons: scale up (hover:scale-110) on hover
   - All transitions are smooth (duration-300)

This component will work perfectly on all screen sizes and is fully customizable!
*/}

          {/* Links + Newsletter */}
          <div className="flex-1 flex flex-col sm:flex-row gap-16 md:justify-end">
            {/* Company Links */}
            <div>
              <h2 className="text-white font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Form */}
            <div>
              <h2 className="text-white font-semibold mb-5">
                Subscribe to our newsletter
              </h2>
              <p className="text-sm mb-4">
                The latest news, articles, and resources, sent to your inbox
                weekly.
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
