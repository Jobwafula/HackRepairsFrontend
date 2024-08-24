import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OurPartners from "@/components/OurPartners";
import Repairs from "@/components/Repairs";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import type { Metadata } from "next";
import WhyHR from "@/components/home/WhyHR";
import Brands from "@/components/Brands";
import Banner from "@/components/Banner";
import OtherProducts from "@/components/home/OtherProducts";
export const metadata: Metadata = {
  title: "Home - Hack Repairs",
  description: "Hack Repairs Home Page",
};

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyHR />
      <Categories />
      <Banner />
      <Repairs />
      <OtherProducts />
      <Contact />
      <Brands />
      <Footer />
    </div>
  );
}
