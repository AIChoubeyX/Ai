// import React, { useEffect } from "react";
// import { useAuth, useUser } from "@clerk/clerk-react";
// import { useState } from "react";
// import { dummyPublishedCreationData } from "../assets/assets";
// import { Heart } from "lucide-react";
// import axios from "axios";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const Community = () => {
//   const [creations, setCreations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { getToken } = useAuth();
//   const { user } = useUser();

//   const fetchCreations = async () => {
//     try {
//       const { data } = await axios.get(
//         "/api/ai/get-published-creations",
//         {
//           headers: {
//             Authorization: `Bearer ${await getToken()}`,
//           },
//         }
//       );
//       if(data.success){
//       setCreations(data.creations);
//       }else{
//          toast.error("No content received from the server.");
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error.message ||
//           "Something went wrong"
//       );
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (user) {
//       fetchCreations();
//     }
//   }, [user]);

//   return (
//     <div className="flex-1 h-full flex flex-col gap-4 p-6">
//       Creations
//       <div className="bg-white h-full w-full rounded-xl overflow-y-scroll">
//         {creations.map((creation, index) => (
//           <div
//             key={index}
//             className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3"
//           >
//             <img
//               src={creation.content}
//               alt=""
//               className="w-full h-full rounded-lg object-cover"
//             />
//             <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
//               <p className="text-sm hidden group-hover:block">
//                 {creation.prompt}
//               </p>
//               <div className="flex items-center gap-2">
//                 <p>{creation.likes.length}</p>
//                 <Heart
//                   className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
//                     creation.likes.includes(user.id)
//                       ? " fill-red-500 text-red-600"
//                       : "text-white"
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Community;


// import React, { useEffect, useState } from "react";
// import { useAuth, useUser } from "@clerk/clerk-react";
// import { Heart } from "lucide-react";
// import axios from "axios";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const Community = () => {
//   const [creations, setCreations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { getToken } = useAuth();
//   const { user } = useUser();

//   const fetchCreations = async () => {
//     try {
//       const { data } = await axios.get("/api/ai/get-published-creations", {
//         headers: {
//           Authorization: `Bearer ${await getToken()}`,
//         },
//       });
//       if (data.success) {
//         setCreations(data.creations);
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

//   useEffect(() => {
//     if (user) {
//       fetchCreations();
//     }
//   }, [user]);

//   return (
//     <div className="flex-1 h-full flex flex-col gap-4 p-6">
//       <h1 className="text-xl font-semibold mb-4">Creations</h1>
//       <div className="bg-white h-full w-full rounded-xl overflow-y-scroll flex flex-wrap">
//         {loading ? (
//           <p className="text-center text-gray-400 py-10 w-full">Loading...</p>
//         ) : creations.length === 0 ? (
//           <p className="text-center text-gray-500 py-10 w-full">
//             No creations published yet.
//           </p>
//         ) : (
//           creations.map((creation, index) => (
//             <div
//               key={index}
//               className="relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3"
//             >
//               <img
//                 src={creation.content}
//                 alt={creation.prompt}
//                 className="w-full h-full rounded-lg object-cover"
//               />
//               <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
//                 <p className="text-sm hidden group-hover:block">
//                   {creation.prompt}
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <p>{creation.likes.length}</p>
//                   <Heart
//                     className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
//                       creation.likes.includes(user.id)
//                         ? "fill-red-500 text-red-600"
//                         : "text-white"
//                     }`}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Community;


import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fatalError, setFatalError] = useState(null);

  const { getToken } = useAuth();
  const { user } = useUser();

  const fetchCreations = async () => {
    try {
      const token = await getToken();
      if (!token) throw new Error("No authentication token found");

      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.error || "No content received from the server.");
      }
    } catch (error) {
      console.error("🔥 fetchCreations Error:", error);
      setFatalError(error);
      toast.error(
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong fetching creations."
      );
    } finally {
      setLoading(false);
    }

  };
  const imageLikeToggle = async (id) =>{
    try {
       const { data } = await axios.post("/api/user/toogle-like-creation",{id}, {
        headers: {
            Authorization: `Bearer ${await getToken()}`,
        },
      });
      if(data.success){
        toast.success(data.message)
        await fetchCreations()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold mb-4">Creations</h1>

      {fatalError && (
        <p className="text-red-500 bg-red-100 p-2 rounded-md">
          {fatalError.message || "Something went wrong while fetching creations."}
        </p>
      )}

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll flex flex-wrap">
        {loading ? (
          <p className="text-center text-gray-400 py-10 w-full">Loading...</p>
        ) : creations.length === 0 ? (
          <p className="text-center text-gray-500 py-10 w-full">
            No creations published yet.
          </p>
        ) : (
          creations.map((creation, index) => (
            <div
              key={index}
              className="relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3"
            >
              <img
                src={creation.content}
                alt={creation.prompt}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
                <p className="text-sm hidden group-hover:block">
                  {creation.prompt}
                </p>
                <div className="flex items-center gap-2">
                  <p>{creation.likes.length}</p>
                  <Heart
                    onClick = {()=> imageLikeToggle(creation.id)} 
                    className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                      creation.likes.includes(user.id)
                        ? "fill-red-500 text-red-600"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
