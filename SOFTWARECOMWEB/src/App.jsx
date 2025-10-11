import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/HeroPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import FeaturesPage from "./components/FeaturesPage";
import Blogs from "./components/Blog";
import About from "./components/About"
import Services from "./components/Services"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import ITCompanyPerfected from "./pages/NoteroLanding";

function App() {
  return (
    <Layout>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/NoteroLanding" element={<ITCompanyPerfected/>} />
      </Routes>
      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
