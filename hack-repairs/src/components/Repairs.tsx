"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Repair {
  title: string;
  img: string;
  oldPrice: number;
  newPrice: number;
}
const Repairs = () => {
  const router = useRouter();
  const handleBooking = (title: string) => {
    router.push(`/brand/${title.toLowerCase()}`);
  };

  const availableRepairs: Repair[] = [
    {
      title: "Tecno",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2000,
      newPrice: 1800,
    },
    {
      title: "Samsung",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2500,
      newPrice: 2300,
    },
    {
      title: "Itel",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 1500,
      newPrice: 1400,
    },
    {
      title: "Xiaomi",
      img: "/screens/tecno/tecnos.jpeg",
      oldPrice: 2200,
      newPrice: 2000,
    },
  ];

  return (
    <div className="mx-8 my-8">
      {/* Available Repairs Section */}
      <h1 className='text-2xl font-bold capitalize'>Repair Your Screen Now !!</h1>
      <section className="p-4">
        <div className="flex flex-col md:flex-row  gap-2">
          {availableRepairs.map((repair, index) => (
            <div
              key={index}
              className="bg-white w-full relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <Image
              width={500}
              height={500}
              objectFit="cover"
                className=""
                src={repair.img}
                alt={repair.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out hover:bg-opacity-50"></div>
              <div className="p-4 flex justify-between items-center absolute w-full bottom-0 gap-8 text-white z-50">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {repair.title}
                  </h2>
                  <button
                    onClick={() => handleBooking(repair.title)}
                    className="mt-2  px-2 py-2 font-bold bg-button text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Repair Screen
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
            <Link href="/services/screen-replacement" className=" ">
              Explore More
            </Link>
          </div>
      </section>
      
    </div>
  );
};
export default Repairs;
