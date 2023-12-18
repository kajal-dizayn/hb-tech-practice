"use client";
import React from "react";
import "./style.css";
import { SliderCard } from ".";

const HomeSlide2 = () => {
  return (
    <div className="w-full h-fit mb-[5vh] px-6 md:flex md:justify-between md:px-0 md:pl-20 md:mb-[22vh]">
      <div className="flex flex-col pl-2 justify-between md:pl-0 ">
        <div className="">
          <p className="text-[32px] leading-[44px] font-semibold grad bg-clip-text text-transparent md:text-[5.17vw] md:leading-[118.75%] xl:text-[64px] xl:leading-[76px]  ">
            Products
          </p>
          <p className="leading-[30px] font-medium text-[#767D90] md:text-base md:mr-12 ">
            We have made some of the best
          </p>
        </div>
        <div className="grad w-[138px] h-11 p-2.5 mt-5 mb-8 flex justify-center items-center rounded text-white ">
          View all
        </div>
      </div>

      <div className="flex flex-col items-start w-full h-fit space-y-5 md:w-8/12 md:flex-row md:overflow-x-scroll md:space-y-0 md:space-x-3">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </div>
  );
};

export default HomeSlide2;
