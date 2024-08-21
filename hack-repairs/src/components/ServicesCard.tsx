"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// service props types
interface serviceprops {
  title: string;
  img: string;
  link: string;
}

export default function ServicesCard({ title, img, link }: serviceprops) {
  const router = useRouter();
  // handle card click
  const handleClick = () => {
    router.push(`${link}`);
  };
  return (
    <div
      className="w-68 h-auto  p-2 bg-white  relative transition-transform duration-500 ease-in-out hover:scale-105  hover:bg-white hover:cursor-pointer  border border-gray-100 rounded-lg shadow-md"
      onClick={handleClick}
    >
      <div className='bg-fuchsia-950  relative hover:bg-white w-full '>
        <Image
          width={400}
          height={400}
          className="w-full  left-0 top-0 h-48 object-cover rounded-t-lg"
          src={img}
          alt={title}
        />
      </div>
      <div className="p-4 bg-white absolute z-50 left-0 bottom-0 w-full hover:text-gray-900 ">
        <h2 className="text-lg hover:text-gray-90  font-bold">{title}</h2>
      </div>
    </div>
  );
}
