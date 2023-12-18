import React from "react";
import "./style.css";

const HomeSlide1 = () => {
  return (
    <div className=" h-screen w-screen px-6 flex flex-col justify-center items-center text-center text-[#767D90] sm:mx-auto sm:w-11/12 ">
      <p className=" text-[32px] font-semibold leading-[44px] md:w-[67.87vw] md:max-w-[891px] md:text-[5.2vw] md:leading-[130%] lg:text-[4.6vw] lg:leading-[125%] 2xl:text-[64px] 2xl:leading-[80px] ">
        We’ll build the <span className="text-[#18181B]">Website</span> and
        <span className="text-[#18181B]"> App</span> of your{" "}
        <span className="grad bg-clip-text text-transparent">Dream</span>
      </p>
      <p className="mt-10 leading-[29px] font-medium md:mt-[42px] md:leading-[30px] md:max-w-[630px] md:w-[63.75vw]  ">
        Best quality/price ratio in the industry • Fast, Responsive & Animated
        Mobile and Web Apps • Unbeatable Prices
      </p>
    </div>
  );
};

export default HomeSlide1;
