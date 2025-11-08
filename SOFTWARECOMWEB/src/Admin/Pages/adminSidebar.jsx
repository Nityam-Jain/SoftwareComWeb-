import React, { useState, useEffect } from "react";
import {
  Home,
  Dock,
  MessageCircle,
  Briefcase,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  LogOut,
  Menu,
  X,
  MapPin,
  FolderDot
} from "lucide-react";
import Logo from "../../assets/BLogix1logo2.png"
import { useNavigate } from "react-router-dom";
import Dashboard from "./adminDashboard";
import Query from "./query";
import CreateJob from "./AdminCreateJob";
import Jobapplication from "./jobApplications";
import BlogsManager from "./adminBlogs";
import ProjectManager from "./AdminProjects"
export default function AdminPanel() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({ Career: false });
  const [activeView, setActiveView] = useState("Dashboard");

  // ✅ Authentication check
  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      // navigate("/AdminLogin");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 bg-opacity-50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full flex-col bg-white border-r border-gray-200 shadow-lg transition-all duration-300 
        lg:relative lg:translate-x-0 ${collapsed ? "w-16" : "w-64"
          } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg  text-white">
              <img
                src={Logo}
                alt="logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Binarylogix Technologies
                </span>
                <span className="text-xs text-gray-500">
                  Admin Management
                </span>
              </div>
            )}
          </div>
          <button
            onClick={closeMobileMenu}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-3">
            {!collapsed && (
              <div className="mb-2 px-4 py-2 text-xs font-semibold uppercase text-gray-500">
                Navigation
              </div>
            )}
            <nav className="space-y-1">
              {/* Dashboard */}
              <button
                onClick={() => {
                  setActiveView("Dashboard");
                  closeMobileMenu();
                }}
                className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                ${activeView === "Dashboard"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                <Home
                  className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"
                    } flex-shrink-0`}
                />
                {!collapsed && <span>Dashboard</span>}
              </button>

              {/* Blogs Manager */}
              <button
                onClick={() => {
                  setActiveView("BlogsMan");
                  closeMobileMenu();
                }}
                className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                ${activeView === "BlogsMan"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                <Dock
                  className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"
                    } flex-shrink-0`}
                />
                {!collapsed && <span>Blogs Manager</span>}
              </button>

              {/* Projects Manager */}
              <button
                onClick={() => {
                  setActiveView("ProjMan");
                  closeMobileMenu();
                }}
                className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                ${activeView === "ProjMan"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                <FolderDot
                  className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"
                    } flex-shrink-0`}
                />
                {!collapsed && <span>Project Management</span>}
              </button>

              {/* Query */}
              <button
                onClick={() => {
                  setActiveView("QueryManager");
                  closeMobileMenu();
                }}
                className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                ${activeView === "QueryManager"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                <MessageCircle
                  className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"
                    } flex-shrink-0`}
                />
                {!collapsed && <span>Query</span>}
              </button>

              {/* Career Dropdown */}
              <div>
                <button
                  onClick={() => toggleMenu("Career")}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors 
                  ${openMenus.Career
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center">
                    <Briefcase
                      className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"
                        } flex-shrink-0`}
                    />
                    {!collapsed && <span>Career</span>}
                  </div>
                  {!collapsed && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform flex-shrink-0 ${openMenus.Career ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {!collapsed && openMenus.Career && (
                  <div className="mt-1 space-y-1 pl-10">
                    <button
                      onClick={() => setActiveView("CreateJob")}
                      className={`block w-full text-left rounded-md py-2 pl-3 pr-4 text-sm transition-colors 
                      ${activeView === "CreateJob"
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      Create Job
                    </button>
                    <button
                      onClick={() => setActiveView("Jobapplication")}
                      className={`block w-full text-left rounded-md py-2 pl-3 pr-4 text-sm transition-colors 
                      ${activeView === "Jobapplication"
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      Job Applications
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 shadow-sm transition-colors"
        >
          <ChevronRight
            className={`h-4 w-4 transition-transform ${collapsed ? "" : "rotate-180"
              }`}
          />
        </button>

        {/* Logout */}
        <div className="mt-auto border-t border-gray-200 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 lg:${collapsed ? "ml-16" : "ml-64"
          } min-w-0`}
      >
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 truncate">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="hover:cursor-pointer flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
          {activeView === "Dashboard" && <Dashboard />}
          {activeView === "BlogsMan" && <BlogsManager />}
          {activeView === "ProjMan" && <ProjectManager />}
          {activeView === "QueryManager" && <Query />}
          {activeView === "CreateJob" && <CreateJob />}
          {activeView === "Jobapplication" && <Jobapplication />}
        </main>
      </div>
    </div>
  );
}
