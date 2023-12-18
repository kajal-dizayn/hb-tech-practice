import Image from "next/image";
import React from "react";
import img from "../../public/assets/Slide3.png";
import Webdev from "../icons/Webdev";

import "./style.css";

const Slide4Card = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center  mb-16 md:flex-row md:justify-between  lg:hidden">
      <div className="grad2 w-[342px] h-[271px] px-3 pt-3 pb-8 rounded-2xl mb-11  md:mb-0">
        <div className="grad3 w-[56px] h-[56px] p-3 rounded-md flex justify-center items-center mb-4">
          <Webdev />
        </div>
        <h1 className="mb-[3px] text-sm font-semibold text-[#18181B] leading-8">
          Web Development
        </h1>
        <p className="text-[14px] font-medium text-[#767D90] leading-6">
          Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it
          and we'll build it. Our websites are light, fast and responsive. We
          guarantee the fastest load times and smoothest animations.
        </p>
      </div>
      <div className="w-[280px] h-[349px]">
        <Image className="w-[100%] h-fit object-contain" src={img} />
      </div>
    </div>
  );
};

export default Slide4Card;
