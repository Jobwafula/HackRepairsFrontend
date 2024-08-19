import Image from "next/image";
interface Sales {
  img: string;
  title: string;
  oldPrice?: number;
  newPrice: number;

}
interface ScreensalesCardProps {
  sales: Sales;
  index: number;
  handleBooking: (title: string) => void;
}
const ScreenSalesCard: React.FC<ScreensalesCardProps> = ({
  sales,
  index,
  handleBooking,
}) => {
  return (
    <div
      key={index}
      className="bg-white w-48 md:w-52 h-auto relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <div className="bg-button absolute left-2 top-2 text-white h-[1rem] p-4 w-[2rem]"><p>2% off</p></div>
      <Image
        width={200}
        height={200}
        src={sales.img}
        alt={sales.title}
        placeholder="blur"
        blurDataURL='....'
      />

      <div className="p-2 flex text-gray-800 justify-between items-center  w-full ">
        <div>
          <h2 className="text-lg font-semibold ">{sales.title}</h2>
          <button
            onClick={() => handleBooking(sales.title)}
            className="mt-2 px-6 py-2   bg-button text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label={`Buy screen  for ${sales.title}`}>
           Buy 
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {sales.oldPrice}</p>
          <p className="text-lg font-bold">Ksh {sales.newPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default ScreenSalesCard;
