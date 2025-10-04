import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/layout"; 
import HomePage from "./components/page";     
import AboutPage from "./components/AboutPage";     
import ContactPage from "./components/ContactPage";     
import Featurespage from "./components/FeaturesPage";     
import Footer from "./components/Footer";     
import Header from "./components/Header";     
import PricePage from "./components/PricingPage";     
import "./index.css";                  

function App() {
  return (
    <Layout>
      <Header/>
      <HomePage />
      <AboutPage />
      <ContactPage/>
      <Featurespage />
      <PricePage />
      <Footer/>
    </Layout>
  );
}

export default App;
