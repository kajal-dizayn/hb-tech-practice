import React from "react";

import image from "../../public/assets/Slide5.png";
import Image from "next/image";
import Arrow from "../icons/Arrow";

const Slide5Card = () => {
  return (
    <div className="w-full h-fit flex flex-col-reverse items-center justify-center px-6  mb-[180px] md:px-20 lg:flex-row lg:justify-between lg:px-20 xl:px-[153px]">
      <div className=" w-[100%] max-w-[533px]  md:w-[533px] md:h-[286px] md:pr-5">
        <p className="text-2xl font-semibold leading-[44px] text-[#18181B] mb-4">
          CableVision
        </p>
        <p className="text-xs font-medium leading-[24px] mb-4 text-[#767D90]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <button className=" group w-[203px] h-[44px] flex items-center rounded-md mr-2 relative ">
          <div
            className="w-[44px] h-[44px] rounded-[38px] bg-[#E3F0F5] absolute z-0 left-[0]
            duration-1000 ease-in-out  
            group-hover:w-[203px] group-hover:rounded"
          ></div>
          <p className="text-xs leading-[30px] font-medium text-[#3874F4] z-[1] pl-6">
            View Full Project
          </p>
          <div className="z-[1]">
            <Arrow />
          </div>
        </button>
      </div>
      <div className="w-[100%] max-w-[502px]  mb-4 rounded-xl md:mb-[16px] lg:w-[34.86vw] lg:mb-[44px]">
        <Image src={image} className="w-[100%] h-fit object-contain" />
      </div>
    </div>
  );
};

export default Slide5Card;

// motion-reduce:transition-none motion-reduce:hover:transform-none
// group-hover:transition group-hover:duration-300 group-hover:ease-in-out group-hover:w-[203px] group-hover:rounded
