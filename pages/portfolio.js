import React from "react";
import NextJsCarousel from "../components/Carousel";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-full mt-12 sm:w-3/4 md:w-5/6 md:mt-24 lg:mt-24 lg:w-4/5 xl:w-3/5 xl:mt-24 2xl:w-2/5 2xl:mt-24">
        <NextJsCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
