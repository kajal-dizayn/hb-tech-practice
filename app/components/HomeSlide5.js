import React from "react";
import Slide5Card from "./Slide5Card";
import "./style.css";

const HomeSlide5 = () => {
  return (
    <div>
      <div className=" flex items-center justify-center mb-[87px] md:mb-[64px]">
        <p className="text-3xl font-semibold leading-[48px] text-[#18181B]">
          Our
        </p>
        <span className="grad bg-clip-text text-transparent text-3xl font-semibold leading-[48px] ml-1">
          Projects
        </span>
      </div>
      <Slide5Card />
      <Slide5Card />
      <Slide5Card />
    </div>
  );
};

export default HomeSlide5;
