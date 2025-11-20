import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { MessageSquare, Users, Briefcase, Layers, BarChart3 } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalQueries: 0,
    totalClients: 0,
    totalProjects: 0,
    totalServices: 0,
  });

  const [visitorData, setVisitorData] = useState([]);

  // ⭐ Fetch Visitors for chart
  const fetchVisitors = async () => {
    try {
      const { data } = await axios.get("/api/visitor/");
      console.log("Visitors Data:", data);
      setVisitorData(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  // ⭐ Fetch Dashboard Stats (uncomment when API ready)
  // const fetchDashboardData = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5001/api/admin/stats");
  //     setStats(data);
  //   } catch (error) {
  //     console.error("Error fetching dashboard data:", error);
  //   }
  // };

  useEffect(() => {
    fetchVisitors();
    // fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Total Queries",
      value: stats.totalQueries,
      icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
      gradient: "from-blue-100 to-blue-50",
      shadow: "shadow-blue-200",
    },
    {
      title: "Total Clients",
      value: stats.totalClients,
      icon: <Users className="w-10 h-10 text-green-500" />,
      gradient: "from-green-100 to-green-50",
      shadow: "shadow-green-200",
    },
    {
      title: "Active Projects",
      value: stats.totalProjects,
      icon: <Briefcase className="w-10 h-10 text-purple-500" />,
      gradient: "from-purple-100 to-purple-50",
      shadow: "shadow-purple-200",
    },
    {
      title: "Services Offered",
      value: stats.totalServices,
      icon: <Layers className="w-10 h-10 text-orange-500" />,
      gradient: "from-orange-100 to-orange-50",
      shadow: "shadow-orange-200",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative px-6 py-8 rounded-2xl bg-gradient-to-br ${card.gradient} ${card.shadow}
              flex flex-col items-center justify-center 
              hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
            style={{
              boxShadow: "0 5px 30px rgba(0,0,0,0.12)",
            }}
          >
            <span className="mb-2">{card.icon}</span>
            <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
            <span className="text-3xl font-extrabold text-gray-900">
              {card.value}
            </span>
          </div>
        ))}
      </div>

      {/* Visitors Analytics Section */}
      <div className="bg-white rounded-2xl shadow-xl p-7">
        <div className="flex items-center gap-3 mb-5">
          <BarChart3 className="w-7 h-7 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-800">Visitors Analytics</h2>
        </div>

        <p className="text-gray-500 mb-4">
          Track daily website visitors. Hover on graph points for exact numbers.
        </p>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
