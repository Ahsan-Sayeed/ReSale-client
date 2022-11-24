import React from "react";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import Carousel from "./Carousel/Carousel";

const Hero = () => {
  return (
    <section>
      <div>
        <Carousel />
      </div>
      <div>
        <div className="relative lg:w-5/6 w-full lg:-mt-10 mt-5 mx-auto mb-12 rounded-lg shadow-md  dark:bg-gray-500">
          <CategoryContainer></CategoryContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
