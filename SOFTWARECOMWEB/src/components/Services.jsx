import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicesComp from "../components/ui/ServicesCom" 
import Notes from "../components/ui/Notes"
import Testimonials from "../components/ui/customers"
import Stats from "../components/ui/stats"
import Servicescard from "../components/servicescard" 
function ServiceSection() {
  return (
    <div className="flex min-h-screen flex-col">
       <Header />

     
       <Servicescard />
        
         <Stats />

          {/* <Notes />

       <Testimonials /> */}

      <Footer />
    </div>
  );
}

export default ServiceSection;
