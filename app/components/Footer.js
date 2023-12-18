import React from "react";

import Facebook from "../icons/Facebook";
import Instragram from "../icons/Instragram";
import Twitter from "../icons/Twitter";
import Logo from "../icons/Logo";
import Logo1 from "../icons/Logo1";

const Footer = () => {
  return (
    <div className="w-full h-fit">
      <div className="hidden sm:flex sm:flex-col w-full h-fit px-10 md:px-10 2xl:px-20">
        <div className="mt-24  xl-w-full flex justify-between items-center ">
          <div className="flex justify-between items-center">
            <Logo />
            <p className="pl-[10px] text-sm leading-8 font-semibold text-[#000]">
              HB - Tech
            </p>
          </div>

          <div className="max-w-[389px] w-[45vw] flex justify-between items-center ">
            <p className="text-[14px] leading-6 font-medium text-[#212529]">
              COMPANY
            </p>
            <p className="text-[14px] leading-6 font-medium text-[#212529]">
              ABOUT US
            </p>
            <p className="text-[14px] leading-6 font-medium text-[#212529]">
              SERVICES
            </p>
            <p className="text-[14px] leading-6 font-medium text-[#212529]">
              OUR WORK
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#8140F7] opacity-[0.2] mb-12 mt-[38px]"></div>
        <div className="w-full h-fit flex justify-between items-center mb-[33px]">
          <div className="w-[104px] h-[24px] flex justify-between items-center">
            <Facebook />
            <Instragram />
            <Twitter />
          </div>
          <p className="text-[14px] leading-6 font-medium text-[#767D90]">
            Copyright ©2023 HB-Tech
          </p>
        </div>
      </div>
      <div className="w-full h-fit px-11 flex flex-col justify-center items-center sm:hidden">
        <div className="flex items-center mb-[67px]">
          <Logo1 />
          <p className="pl-[10px] text-sm leading-8 font-semibold text-[#000]">
            HB - Tech
          </p>
        </div>
        <div className="w-full h-fit flex justify-between items-center mb-[38px]">
          <p className="text-[14px] leading-6 font-medium text-[#212529]">
            COMPANY
          </p>
          <p className="text-[14px] leading-6 font-medium text-[#212529]">
            ABOUT US
          </p>
        </div>
        <div className="w-full h-fit flex justify-between items-center mb-[50px]">
          <p className="text-[14px] leading-6 font-medium text-[#212529]">
            SERVICES
          </p>
          <p className="text-[14px] leading-6 font-medium text-[#212529]">
            OUR WORK
          </p>
        </div>
        <div className="flex-col justify-center items-center">
          <div className="w-[158px] h-[36px] flex justify-between items-center mb-[33px]">
            <Facebook />
            <Instragram />
            <Twitter />
          </div>
          <p className="text-[14px] leading-6 font-medium text-[#767D90] mb-[14px]">
            Copyright ©2023 HB-Tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
