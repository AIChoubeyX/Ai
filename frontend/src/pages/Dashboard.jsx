import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Sparkles } from "lucide-react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* total craetion card */}
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
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {
          creations.map((item)=> <CreationItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default Dashboard;
