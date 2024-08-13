import ServicesCard from "@/components/ServicesCard";

const Services = () => {
  return (
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
      <h2 className="text-3xl font-semibold capitalize text-center mb-6">Our Services?</h2>
        <ServicesCard title="screen replament" img="/repair.png" link='/services/screen-replacement' />
      </section>
    </div>
  );
};
export default Services;
