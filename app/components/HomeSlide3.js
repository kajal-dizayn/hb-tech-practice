import React from "react";

import "./style.css";
import Image from "next/image";
import img1 from "../../public/assets/img 1.png";
import img2 from "../../public/assets/img 2.png";
import img3 from "../../public/assets/img 3.png";
import img4 from "../../public/assets/img 4.png";
import img5 from "../../public/assets/img 5.png";
import img6 from "../../public/assets/img 6.png";
import img7 from "../../public/assets/img 7.png";
import img8 from "../../public/assets/img 8.png";
import img9 from "../../public/assets/img 9.png";
import img10 from "../../public/assets/img 10.png";
import img11 from "../../public/assets/img 11.png";

const HomeSlide3 = () => {
  return (
    <div className="w-full h-fit mb-[200px] px-6 md:px-0  lg:mb-[269px]">
      <div className="mb-[5vh] md:mb-[12vh] md:pl-20 ">
        <p className="text-base font-medium text-[#767D90] mb-[13px]">
          ABOUT US
        </p>
        <p
          className="w-full h-fit text-[32px] font-semibold text-[#212529] leading-[44px] md:w-[100%] md:leading-[133.333%] md:text-[4vw] 
           lg:w-[80%] lg:leading-[133.333%] lg:text-[3.2vw] 
           2xl:text-[48px] 2xl:leading-[64px] 2xl:tracking-[1px] max-w-[1145px] "
        >
          We’re a full service creative agency, working globally with brands and
          businesses at all stages of their journey.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col ali">
        <div className="w-full h-fit flex flex-col items-center mb-[32px] lg:flex lg:flex-row lg:items-center justify-center lg:mb-16">
          <p className="text-base font-medium leading-[30px] text-[#18181B] md:text-[36px] md:leading-[48px] md:font-semibold">
            Meet our top-tier
          </p>
          <p className="grad text-[32px] leading-[44px] font-semibold grad bg-clip-text text-transparent md:text-[36px] md:leading-[48px] md:pl-1">
            Customers
          </p>
        </div>
        <div className=" hidden lg:w-full lg:h-fit lg:flex lg:flex-col lg:items-center lg:justify-center">
          <Image />
          <div className="first:pl-0 flex items-center mb-4">
            <Image className="image w-[100%] h-fit object-contain" src={img1} />
            <Image className="image w-[100%] h-fit object-contain" src={img2} />
            <Image className="image w-[100%] h-fit object-contain" src={img3} />
            <Image className="image w-[100%] h-fit object-contain" src={img4} />
            <Image className="image w-[100%] h-fit object-contain" src={img5} />
          </div>
          <div className="first:pl-0 flex items-center mb-4">
            <Image className="image w-[100%] h-fit object-contain" src={img6} />
            <Image className="image w-[100%] h-fit object-contain" src={img7} />
            <Image className="image w-[100%] h-fit object-contain" src={img8} />
            <Image className="image w-[100%] h-fit object-contain" src={img9} />
            <Image
              className="image w-[100%] h-fit object-contain"
              src={img10}
            />
            <Image
              className="image w-[100%] h-fit object-contain"
              src={img11}
            />
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col items-center justify-center lg:hidden">
          <div className="first:pl-0 flex items-center mb-3">
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px] object-contain"
              src={img1}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img2}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img3}
            />
          </div>
          <div className="first:pl-0 flex items-center mb-3">
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img4}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img5}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img6}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img7}
            />
          </div>
          <div className="first:pl-0 flex items-center mb-3">
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img8}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img9}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img10}
            />
            <Image
              className="w-[79px] h-[64px] pl-2 sm:w-[102px] sm:h-[79px]  object-contain"
              src={img11}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide3;
