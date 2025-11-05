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
      const { data } = await axios.get("http://localhost:5000/api/admin/stats");
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
      icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
      gradient: "from-blue-100 to-blue-50",
    },
    {
      title: "Total Clients",
      value: stats.totalClients,
      icon: <Users className="w-10 h-10 text-green-600" />,
      gradient: "from-green-100 to-green-50",
    },
    {
      title: "Active Projects",
      value: stats.totalProjects,
      icon: <Briefcase className="w-10 h-10 text-purple-600" />,
      gradient: "from-purple-100 to-purple-50",
    },
    {
      title: "Services Offered",
      value: stats.totalServices,
      icon: <Layers className="w-10 h-10 text-orange-600" />,
      gradient: "from-orange-100 to-orange-50",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl fontbold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md bg-gradient-to-br ${card.gradient} flex items-center`}
          >
            <div className="mr-4">{card.icon}</div>
            <div>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-3xl font-bold mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Future Charts */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Overview / Analytics</h2>
        <p className="text-gray-500">Charts and advanced analytics can be added here.</p>
      </div>
    </div>
  );
}
