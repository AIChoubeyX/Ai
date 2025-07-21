// import React, { useEffect, useState } from "react";
// import { dummyCreationData } from "../assets/assets";
// import { Sparkles } from "lucide-react";
// import CreationItem from "../components/CreationItem";
// import axios from "axios";
// import { useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const Dashboard = () => {
//   const [creations, setCreations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { getToken } = useAuth();

//   const getDashboardData = async () => {
//     try {
//       const { data } = await axios.get("/api/user/get-user-creations", {
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
//           "Something went wrong."
//       );
//     }
//   };

//   useEffect(() => {
//     getDashboardData();
//   }, []);

//   return (
//     <div className="h-full overflow-y-scroll p-6">
//       <div className="flex justify-start gap-4 flex-wrap">
//         {/* total craetion card */}
//         <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
//           <div className="text-slate-600">
//             <p className="text-sm">Total creations</p>
//             <h2 className="text-xl font-semibold">{creations.length}</h2>
//           </div>
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex items-center justify-center">
//             <Sparkles className="w-8 text-shadow-white" />
//           </div>
//         </div>
//       </div>
//       {
//         loading ? (
//           <div className="mt-6 text-center text-gray-500">Loading...</div>
//         ) : (
//           <div className="space-y-3">
//             <p className="mt-6 mb-4">Recent Creations</p>
//             {creations.map((item) => (
//               <CreationItem key={item.id} item={item} />
//             ))}
//           </div>
//         )
//       }
      
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import CreationItem from "../components/CreationItem";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

// Set base URL for all axios requests
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getToken } = useAuth();

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setCreations(data.creations);
        console.log("Fetched creations:", data.creations); // ✅ Debug log
      } else {
        toast.error("No content received from the server.");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong while fetching creations."
      );
    } finally {
      setLoading(false); // ✅ Always stop loading
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      {/* Top Stats Card */}
      <div className="flex justify-start gap-4 flex-wrap">
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex items-center justify-center">
            <Sparkles className="w-8 text-shadow-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      {loading ? (
        <div className="mt-6 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="space-y-3">
          <p className="mt-6 mb-4 font-medium text-lg text-gray-700">Recent Creations</p>
          {creations.length > 0 ? (
            creations.map((item) => (
              <CreationItem key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center text-gray-400">No creations found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
