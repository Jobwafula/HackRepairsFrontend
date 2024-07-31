import { MdVerified } from "react-icons/md";

interface ReviewCardProps {
  reviewText: string;
  name: string;
  surname: string;
  verified: boolean;
}

const ReviewsCard: React.FC<ReviewCardProps> = ({ reviewText, name, surname, verified }) => {
  const { innerWidth: Width } = window;

  return (
    <div className="p-6 md:p-10 border rounded shadow-lg bg-white">
      <p className="text-sm md:text-base text-gray-700">{reviewText}</p>
      <div className="flex items-center mt-4 space-x-4">
        <div>
          <p className="text-md font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{surname}</p>
        </div>
        {verified && (
          <div className="flex">
            <MdVerified
              size={Width < 631 ? 35 : 40}
              className="text-blue-500 ml-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsCard;