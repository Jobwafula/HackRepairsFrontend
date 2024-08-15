import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesCard from "@/components/ServicesCard";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* hero section */}
        <section className="relative mb-12">
          <img
            src="/images/sell-with-us-hero.jpg"
            alt="Sell with us"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-white text-4xl font-bold text-center">
              Explore Our services
            </h1>
          </div>
        </section>
        {/* services section */}
        <section>
          <h2 className="text-3xl font-semibold capitalize text-center mb-6">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row md:gap-4 ">
            <ServicesCard
              title="screen replament"
              img="/repair.png"
              link="/services/screen-replacement"
            />

            <ServicesCard
              title="Screen Sales Promotion"
              img="/repair.png"
              link="/services/screen-replacement"
            />
            <ServicesCard
              title="Digital Marketing"
              img="/repair.png"
              link="/services/screen-replacement"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Services;
