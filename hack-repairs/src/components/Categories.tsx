"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

//should  fetch categories -api
// -get-client - /get/ api
// -post-admin -/post/api
//-delete - /delete/api
// patch - /pa

interface category {
  name:string,
  id:number,
  image:string
}

const categories:category[] = [
  {
    id: 1,
    name: "Tecno",
    image: "/categories/tecno.png",
  },

  { id: 2, name: "Samsung", image: "/categories/samsung.png" },
  { id: 3, name: "Itel", image: "/categories/itel.png" },
  { id: 4, name: "Huawei", image: "/categories/tecno.png" },
  { id: 5, name: "Apple", image: "/categories/tecno.png" },
  { id: 6, name: "Nokia", image: "/categories/tecno.png" },
  { id: 7, name: "Xiaomi", image: "/categories/tecno.png" },
  { id: 8, name: "Oppo", image: "/categories/tecno.png" },
];
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

const Categories = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    // Navigate to the category page
    router.push(`/categories/${categoryName.toLowerCase()}`);
  };

  return (
    <div className=" mx-8 my-8  ">
      {/* Animated Heading */}
      <motion.h1
        id="animatedText"
        className="text-2xl font-bold capitalize overflow-hidden whitespace-nowrap"
        variants={typingAnimation}
        initial="hidden"
        animate={controls}
        custom={20}
      >
        Shop By category
      </motion.h1>
      {/* cards */}
      <div className="grid grid-cols-2 md:mx-[4rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="transition-transform duration-500 ease-in-out hover:scale-105 w-48 hover:cursor-pointer h-48 relative p-4 "
          >
            <div className="border p-4  rounded-full flex items-center justify-center">
              <Image
                width={200}
                height={300}
                src={category.image}
                alt={category.name}
                className="w-[80%] h-[80%] object-cover mb-4 rounded-md"
              />
            </div>
            <h2 className=" text-xl font-semibold capitalize">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
