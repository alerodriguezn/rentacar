

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";

export const CarrouselCarImages = () => {
  return (
    <Carousel className="w-full max-w-xs" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        <CarouselItem>
          <Image src={"/imgs/yaris-2018.png"} alt="" width={400} height={400} />
        </CarouselItem>
        <CarouselItem>
          <Image src={"/imgs/car-2.jpeg"} alt="" width={400} height={400} />
        </CarouselItem>
        <CarouselItem>
          <Image src={"/imgs/car-1.jpeg"} alt="" width={400} height={400} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
