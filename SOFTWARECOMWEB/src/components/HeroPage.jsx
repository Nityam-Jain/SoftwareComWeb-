import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppLanding from "./ui/AppLandingPage"
import Features from "./ui/Features"
import Creative from "./ui/Creatives"
import Notes from "./ui/Notes"
import About from "./ui/About"
import Popular from "./ui/Popularapps"
import MobileSlider from "./ui/mobileslider"
import Customers from "./ui/customers"
import Stats from "./ui/stats"
import ServicesComp from "../components/ui/ServicesCom"
import ContactComp from "../components/contactcomp" 
// import Price from "./ui/price"
import Support from "./ui/Support"
// import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";
import {
  Smartphone,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <AppLanding />

      <Popular />

      {/* <Features /> */}

      <Creative />

        <ServicesComp />

      <Notes />

      {/* <About /> */}



      {/* <MobileSlider /> */}

      <Customers />

      {/* <Price /> */}

      <Stats />

      <Support />

      <ContactComp/>

      <Footer />
    </div>
  );
}

export default HomePage;
