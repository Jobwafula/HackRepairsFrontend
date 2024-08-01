import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OurPartners from "@/components/OurPartners";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    
           <div className="">
            {/* <Navbar /> */}
            <Hero />
            <Categories />
            {/* <SpecialOffers /> */}
            {/* <HowItWorks /> */}
            <Testimonials />
            
            <OurPartners />
            <FAQ />
            <Contact />
          {/* <Footer /> */}
           </div>

        

      
            
  );
}
