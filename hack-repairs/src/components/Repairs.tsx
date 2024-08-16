"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
interface Repair {
  title: string;
  img: string;
  oldPrice: number;
  newPrice: number;
}

const typingAnimation = {
  hidden: { width: 0 },
  visible: (i: number) => ({
    width: `${i}ch`,
    transition: {
      duration: i * 0.1,
      ease: "linear",
    },
  }),
};
const Repairs = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const handleBooking = (title: string) => {
    router.push(`/brand/${title.toLowerCase()}`);
  };

  const availableRepairs: Repair[] = [
    {
      title: "Tecno",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2000,
      newPrice: 1800,
    },
    {
      title: "Samsung",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2500,
      newPrice: 2300,
    },
    {
      title: "Itel",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 1500,
      newPrice: 1400,
    },
    {
      title: "Xiaomi",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2200,
      newPrice: 2000,
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animatedText");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top <= window.innerHeight && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  return (
    <div className="ml-0 md:ml-8 mx-8 md:mx-0 my-8">
      {/* Available Repairs Section */}
      <motion.h1
        id="animatedText"
        className="text-2xl font-bold capitalize overflow-hidden whitespace-nowrap"
        variants={typingAnimation}
        initial="hidden"
        animate={controls}
        custom={20} // Adjust this value based on the length of your text
      >
        Repair Your Screen Now !!
      </motion.h1>
      <section className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {availableRepairs.map((repair, index) => (
            <div
              key={index}
              className="bg-white w-48 md:w-52 h-auto relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <Image
              width={200}
              height={150}
              objectFit="cover"
                className=""
                src={repair.img}
                alt={repair.title}
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out hover:bg-opacity-50"></div> */}
              <div className="px-2 mt-[-1rem] pb-2 bg-gradient-to-b from-white flex text-gray-800 justify-between items-center w-full   z-50">
                <div>
                  <h2 className="text-lg font-semibold ">
                    {repair.title}
                  </h2>
                  <button
                    onClick={() => handleBooking(repair.title)}
                    className="mt-2 text-sm px-4  py-2 font-bold bg-button text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Repair
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm line-through">Ksh {repair.oldPrice}</p>
                  <p className="text-lg font-bold">Ksh {repair.newPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:w-[20%] bg-[#003300] hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg">
            <Link href="/services/screen-replacement" className="flex items-center justify-center gap-2 ">
             <span>Explore More</span> 
              <span className="animate-ping"><FaArrowRightLong /></span>
            </Link>
          </div>
      </section>
      
    </div>
  );
};
export default Repairs;
