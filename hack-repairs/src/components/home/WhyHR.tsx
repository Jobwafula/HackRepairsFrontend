import { TiWorld } from "react-icons/ti";
import {
  MdOutlineWatchLater,
  MdDashboard,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";
const WhyHR = () => {
  const data = [
    {
      title: "Delivery in 24hrs",
      icon: <TiWorld />,

      description: "HackRepairs products for you.",
    },
    {
      title: "Quality Quarantee",
      icon: <MdDashboard />,

      description:
        "Quality checked by our team",
    },
    {
      title: "secure payments",
      icon: <MdSecurity />,

      description:
        "Receive and make payments securely through our trusted platform.",
    },
    {
      title: "24/7 support",
      icon: <MdSupportAgent />,
      description:
        "our support team is available around the clock to assit you",
    },
  ];
  return (
    <section className="mb-12 mt-12">
      <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => {
          return (
            <div key={item.title}>
              <div className="text-center flex flex-col justify-center items-center p-4">
                <span className="bg-white flex items-center justify-center"><h3 className="text-[3rem]  text-button font-semibold mb-2">
                  {item.icon}
                </h3></span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyHR;
