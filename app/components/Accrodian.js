"use client";

import React, { useState } from "react";
import Webdev from "../icons/Webdev";
import DownArrow from "../icons/DownArrow";

import "./style.css";

const Accrodian = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={
        show
          ? "grad2 w-[543px] h-[262px] rounded-2xl pl-[31px] pr-[30px] mb-10 pt-[53px] pb-3 flex justify-between duration-300 ease-in-out"
          : "w-[482px]  mb-10 bg-transparent h-[56px] flex  items-center justify-between"
      }
      onClick={handleClick}
    >
      <div className="flex">
        <div
          className={
            show
              ? "grad3 w-[56px] h-[56px] p-3 rounded-md flex justify-center items-center mr-5 "
              : "grad3 w-[56px] h-[56px] p-3 rounded-md flex justify-center items-center mr-7"
          }
        >
          <Webdev />
        </div>
        <div>
          <h1
            className={
              show
                ? "mb-[3px] text-sm font-semibold text-[#18181B] leading-8"
                : " text-sm font-semibold text-[#18181B] leading-8 mb-5"
            }
          >
            Web Development
          </h1>
          <p
            className={
              show
                ? "text-[14px] font-medium text-[#767D90] leading-6"
                : "hidden"
            }
          >
            Wordpress, React, Shopify, Marketing, Business, Portfolio, you name
            it and we'll build it. Our websites are light, fast and responsive.
            We guarantee the fastest load times and smoothest animations.
          </p>
        </div>
      </div>
      <div
        className={
          show
            ? "rotate-[360deg] duration-300 ease-in-out"
            : "rotate-[270deg] duration-300 ease-in-out"
        }
      >
        <DownArrow />
      </div>
    </div>
  );
};

export default Accrodian;
