'use client'
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewsCard";

// Dynamically import the Slider component with no SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
  };

  const reviews = [
    {
      reviewText: "Rochman Properties Limited have been managing my properties for over 25 years and I have not had a complain.  I recommend them to anyone looking for a genuine real estate partner in Kenya.",
      profileImg: "/face.jpeg",
      name: "Peter",
      surname: "Karanja",
      verified: true
    },
    {
      reviewText: "I had my fears of investing back in Kenya given the trend of most Kenyans in Diaspora being duped of their hard earned money by fraudulent companies, and even relatives. Rochman Properties was patient with me during the transaction and allowed me to send as many people to verify the property. I would recommend Rochman to any Kenyan living abroad who wants genuine and quality property in Kenya",
      name: "Catherine",
      surname: "Mukuria",
      verified: true
    },
    {
      reviewText: "For as long as I can remember, Real Estate investing has been a part of my life. As kids we’d drive around with dad looking for land or homes to invest in. Not all were successful but we learned in the process. Part of that process is finding a good developer and builder that will go above and beyond and deliver for their clients over and over again. The other challenge is finding one that is reputable and can work and communicate efficiently with those of us in the Diaspora. We have been fortunate to have found such a company and over the years that we’ve done business with Rochman Properties Limited, they’ve continued in their excellence of delivering beautiful homes for their clients.",
      name: "Emily Wangari",
      surname: "Muiruri",
      verified: true
    },
    {
      reviewText: "All their properties are prime and within competitive prices.I also like the customer experience from their property consultants. Good job!",
      name: "Abdi",
      surname: "Hussein",
      verified: true
    },
  ];

  return (
    <div className="overflow-x-hidden font-poppins">
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-button">
                What our customers have to say
              </h2>
              <p className="text-gray-700">
                Here are some reviews of our customers and their experience
                with our services and what we provide!
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <Slider {...settings}>
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={index}
                    reviewText={review.reviewText}
                    name={review.name}
                    surname={review.surname}
                    verified={review.verified}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Next Arrow
const SampleNextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#003300", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const SamplePrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#003300", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

export default Review;
