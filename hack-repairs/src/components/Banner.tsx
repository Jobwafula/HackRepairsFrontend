import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-r from-green-800 via-button to-button relative grid grid-cols-3 md:flex items-center gap-2 text-white h-48 w-full">
      <div className="  md:w-full  ml-4 p-2 md:p-0 md:pt-4 flex flex-col">
        <h1 className="text-lg md:text-4xl capitalize">We offer free delivery services</h1>
        <p className="md:ml-[30%]  md:text-2xl flex items-center  font-semibold leading-loose">
          <span className="text-white ">
            <IoLocationOutline className="mr-2 h-5 w-5" />
          </span>
          <span>Kilifi Township</span>
        </p>
      </div>
      <div className="md:absolute text-[10px] md:text-sm z-10 right-2 md:left-[50%]">
        <p>Are you within Kilifi Town?</p>
        <ul className="list-disc pl-[1rem]">
          <li>
            <p>Book a screen replacement repair service or buy phone screens</p>
          </li>
          <li>
            <p>Your order will be dispatched with zero delivery fee</p>
          </li>
        </ul>
      </div>

      <div className="relative md:w-[60%]">
        <div className="absolute inset-0 left-0 bg-button bg-opacity-50"></div>
        <Image width={200} height={200} src="/delivery.webp"className='' alt="delivery" />
      </div>
    </div>
  );
};

export default Banner;
