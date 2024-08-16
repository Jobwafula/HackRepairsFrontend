import Image from "next/image";
interface Repair {
  img: string;
  title: string;
  oldPrice?: number;
  newPrice: number;
}
interface ScreenRepairCardProps {
  repair: Repair;
  index: number;
  handleBooking: (title: string) => void;
}
const ScreenRepairCard: React.FC<ScreenRepairCardProps> = ({
  repair,
  index,
  handleBooking,
}) => {
  return (
    <div
      key={index}
      className="bg-white w-48 md:w-52 h-auto relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <Image
        width={200}
        height={200}
        objectFit="cover"
        className=" "
        src={repair.img}
        alt={repair.title}
      />

      <div className="p-2 flex text-gray-800 justify-between items-center  w-full ">
        <div>
          <h2 className="text-lg font-semibold ">{repair.title}</h2>
          <button
            onClick={() => handleBooking(repair.title)}
            className="mt-2 px-4 py-2  aria-l bg-button text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label={`Book repair for ${repair.title}`}>
            Repair
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {repair.oldPrice}</p>
          <p className="text-lg font-bold">Ksh {repair.newPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default ScreenRepairCard;
