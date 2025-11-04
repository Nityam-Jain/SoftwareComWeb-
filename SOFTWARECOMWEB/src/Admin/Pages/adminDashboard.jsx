import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Image,
  MessageCircle,
  LogOut,
  Menu,
  X,
  ChevronRight,
  AppWindowMac
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Query from "./query"

// ✅ Placeholder Components
function Dashboard() {
  return <div className="p-4">Welcome to your Admin Dashboard!</div>;
}
function BannerManager() {
  return <div className="p-4">Manage your website's homepage banners here.</div>;
}
function QueryManager() {
  return <Query/>;
}
function JobApplications() {
  return <div className="p-4">Manage your Job Applications here .</div>;
}


export default function AdminPanel() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Check Admin Login
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    // if (!token) navigate("/AdminLogin");
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("role");
    // navigate("/AdminLogin");
  };

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, view: "Dashboard" },
    { label: "Banner Manager", icon: Image, view: "BannerManager" },
    { label: "Query", icon: MessageCircle, view: "QueryManager" },
    { label: "Job Applications", icon: AppWindowMac, view: "JobApplications" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ✅ Mobile Topbar */}
      <div className="md:hidden fixed w-full flex justify-between items-center bg-[#3487fa] text-white p-4 z-50">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* ✅ Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div className="h-full flex flex-col px-3 py-6 relative">
          {/* Logo Header */}
          <div className="flex items-center justify-between mb-10 px-3">
            {!collapsed && (
              <h2 className="text-2xl font-bold text-[#1B3C53]">Admin Panel</h2>
            )}
            <button className="md:hidden text-gray-700" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveView(item.view);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left
                ${
                  activeView === item.view
                    ? "bg-[#3487fa] text-black"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-24 hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 shadow-sm transition"
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                collapsed ? "" : "rotate-180"
              }`}
            />
          </button>

          {/* Logout Button */}
          <div className="mt-auto px-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center md:justify-start gap-2 py-2 rounded-lg text-red-600 hover:bg-red-100 font-semibold transition-colors"
            >
              <LogOut className="w-5 h-5" />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* ✅ Main Content */}
      <main
        className={`transition-all duration-300 flex-1 p-4 md:p-6 mt-14 md:mt-0 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        {activeView === "Dashboard" && <Dashboard />}
        {activeView === "BannerManager" && <BannerManager />}
        {activeView === "QueryManager" && <QueryManager />}
        {activeView === "JobApplications" && <JobApplications />}
      </main>
    </div>
  );
}