'use client'
import * as React from 'react'
import { TiWorld } from "react-icons/ti";
import {
  MdOutlineWatchLater,
  MdDashboard,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"




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

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="mb-12 mt-12 mx-12">
      <div className="">
      <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true
      }}
      orientation="horizontal"
      className="w-full h-30"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 bg-gradient-s bg-">
            <div className="p-1">
              <Card className="sm:flex flex-wrap">
                <CardContent className="flex-col text-center w-fit h-fit items-center justify-center">
                  <span>
                    <p className="font-semibold  w-fit bg-white text-[3rem]">{item.icon}</p>
                  </span>
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-semibold text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        {/* {data.map((item) => {
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
        })} */}
      </div>
    </section>
  );
};

export default WhyHR;




