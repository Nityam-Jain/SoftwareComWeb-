import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/HeroPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import FeaturesPage from "./components/FeaturesPage";
import Blogs from "./components/Blog";
import BlogDetail from "./components/BlogDetail";



import About from "./components/About"
import Services from "./components/Services"
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/whats"
import CarrerPage from "./components/CarrerPage"
import AdminLogin from "./Admin/Pages/adminLogin"
import AdminSidebar from "./Admin/Pages/adminSidebar";
import "./index.css";
// import ITCompanyPerfected from "./pages/NoteroLanding";

function App() {
  return (
    <Layout>
      <WhatsappIcon />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs />} />
        import BlogDetail from "./pages/BlogDetail";

        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/career" element={<CarrerPage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={< AdminSidebar />} />
      </Routes>
      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
