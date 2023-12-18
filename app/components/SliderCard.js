import Image from "next/image";
import React from "react";

import image1 from "../../public/assets/Slider1.png";
import Arrow from "../icons/Arrow";

const SliderCard = () => {
  return (
    <div
      className="cursor-pointer w-full max-w-xl h-fit px-4 pt-6 pb-3 rounded-2xl md:min-w-[378px] md:px-4 md:pt-3 md:pb-2"
      style={{
        background:
          "linear-gradient(213deg, rgba(239, 251, 255, 0.50) 17.97%, rgba(208, 224, 229, 0.50) 99.83%)",
      }}
    >
      <Image
        src={image1}
        alt="LOGO"
        className=" w-full h-auto object-contain"
      />
      <div className="flex justify-between items-center w-full h-fit mt-[27px]">
        <div className="mr-[25px]">
          <p className="text-xl font-semibold leading-8">Software</p>
          <p className="text-base font-normal text-[#767D90] ">
            All in one management software
          </p>
        </div>
        <Arrow />
      </div>
    </div>
  );
};

export default SliderCard;
