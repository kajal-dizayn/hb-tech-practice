import React from "react";
import Slide4Card from "./Slide4Card";
import Image from "next/image";

import img from "../../public/assets/Slide3.png";
import { Accrodian } from ".";

const HomeSlide4 = () => {
  return (
    <div className="w-full h-fit px-5 md:px-10 lg:px-20">
      <div className="w-full h-fit max-w-[595px] md:w-[50vw] mb-[6px] md:pl-[35px]">
        <h1 className="text-base font-medium text-[#767D90] mb-[18px]">
          OUR SERVICES
        </h1>
        <p className="text-2xl font-semibold leading-[38px] md:text-[2.5vw] md:leading-[137.5%] 2xl:text-2xl 2xl:font-semibold 2xl:leading-[38px]">
          Bring the world to your door with our Best in class services
        </p>
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <div className=" mr-20 flex flex-col justify-center">
          <Accrodian />
          <Accrodian />
          <Accrodian />
        </div>
        <div className="w-[30vw] max-w-[495px] h-fit">
          <Image src={img} className="w-[100%] h-fit object-contain" />
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <Slide4Card />
        <Slide4Card />
        <Slide4Card />
      </div>
    </div>
  );
};

export default HomeSlide4;
