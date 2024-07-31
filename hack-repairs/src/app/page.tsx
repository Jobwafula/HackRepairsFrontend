import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurPartners from "@/components/OurPartners";
import Image from "next/image";

export default function Home() {
  return (
    
           <div className="">
            <Navbar />
            <Hero />
            <Categories />
            <OurPartners />
            <Footer />
           </div>

        

      
            
  );
}
