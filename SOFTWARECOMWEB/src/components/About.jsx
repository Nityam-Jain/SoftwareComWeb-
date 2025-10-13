import React from "react";
import About from "./ui/About"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutUs from "../components/ui/About"
import Notes    from "../components/ui/Notes"
import OurLeaders from "../components/ui/Leaders"
import AboutUS from "../components/ui/Creatives"
import Popularclient from "../components/ui/Popularapps"
function AboutSection() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Popularclient />

      <AboutUS />

      <Notes />

      <OurLeaders />

      <Footer />
    </div>
  );
}

export default AboutSection;
