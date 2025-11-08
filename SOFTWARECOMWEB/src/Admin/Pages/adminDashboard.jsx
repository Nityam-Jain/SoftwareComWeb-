import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageSquare, Users, Briefcase, Layers } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalQueries: 0,
    totalClients: 0,
    totalProjects: 0,
    totalServices: 0,
  });

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/admin/stats");
      setStats(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Total Queries",
      value: stats.totalQueries,
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      gradient: "from-blue-100 to-blue-50",
      shadow: "shadow-blue-200",
      glow: "bg-blue-400/10",
    },
    {
      title: "Total Clients",
      value: stats.totalClients,
      icon: <Users className="w-12 h-12 text-green-500" />,
      gradient: "from-green-100 to-green-50",
      shadow: "shadow-green-200",
      glow: "bg-green-400/10",
    },
    {
      title: "Active Projects",
      value: stats.totalProjects,
      icon: <Briefcase className="w-12 h-12 text-purple-500" />,
      gradient: "from-purple-100 to-purple-50",
      shadow: "shadow-purple-200",
      glow: "bg-purple-400/10",
    },
    {
      title: "Services Offered",
      value: stats.totalServices,
      icon: <Layers className="w-12 h-12 text-orange-500" />,
      gradient: "from-orange-100 to-orange-50",
      shadow: "shadow-orange-200",
      glow: "bg-orange-400/10",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative px-7 py-9 rounded-2xl bg-gradient-to-br ${card.gradient} ${card.shadow} flex flex-col items-center justify-center
              hover:scale-[1.04] hover:shadow-2xl transition-all duration-300
              before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:opacity-60 ${card.glow}
            `}
            style={{
              boxShadow: "0 5px 40px rgba(0,0,0,0.11)",
              animation: `cardFadeIn 0.8s ${index * 0.14 + 0.2}s both`,
            }}
          >
            <span className="mb-2">{card.icon}</span>
            <h2 className="text-lg xs:text-xl font-bold mb-0.5 text-gray-700">{card.title}</h2>
            <span className="text-4xl font-extrabold text-gray-900 tracking-wide mb-1">{card.value}</span>
          </div>
        ))}
      </div>

      {/* Analytics and Overview Section */}
      <div className="bg-white rounded-2xl shadow-xl p-7 flex flex-col sm:flex-row gap-8 items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Overview / Analytics</h2>
          <p className="text-gray-500 max-w-md mb-2">
            Quickly monitor company health and KPIs. Graphs, stats, and actionable insights will appear here.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30" />
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full blur-2xl opacity-30" />
        </div>
      </div>
      <style>
        {`
          @keyframes cardFadeIn {
            from {transform: translateY(26px); opacity: 0;}
            to {transform: translateY(0); opacity: 1;}
          }
        `}
      </style>
    </div>
  );
}
