"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";

import logo from "../../public/assets/NavLogo.png";
import menuIcon from "../../public/assets/MenuIcon.png";

const menuItems = ["Products", "Services", "Products", "Blogs"]; // Add your menu items here

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const logoRef = useRef();
  const animation = useRef(null);

  useEffect(() => {
    animation.current = gsap.from(logoRef.current, {
      duration: 2,
      rotation: 360,
      repeat: -1,
      repeatDelay: 5,
    });
    return () => {
      animation.current?.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 flex justify-between items-center  w-full h-[91px] px-6 md:px-[5.55vw] md:mt-0 md:py-5 md:h-[91px] bg-[rgb(239,251,255)]/50 backdrop-filter backdrop-blur-[20px]">
      <Image
        ref={logoRef}
        src={logo}
        alt="LOGO"
        className="cursor-pointer w-[73px] h-auto object-contain"
      />
      <div className="hidden md:flex w-[419px] mx-auto h-[50px]  justify-between   ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              activeIndex === index
                ? "w-fit cursor-pointer h-fit justify-center items-center p-2.5 text-[#18181B] font-medium border-b-2 border-[#B3C2C8] "
                : "w-fit h-fit cursor-pointer justify-center items-center p-2.5  text-[#767D90]  font-medium hover:border-b-2 hover:border-[#B3C2C8] hover:text-[#18181B]"
            }
          >
            {item}
          </div>
        ))}
      </div>
      <div className=" hidden cursor-pointer md:flex w-[134px] h-10 px-6 py-[5px] bg-[#3874F4] rounded items-center font-medium text-white hover:bg-[#3994F4]">
        Contact Us
      </div>
      <Image
        src={menuIcon}
        alt=""
        className="w-[34px] h-auto block md:hidden"
      />
    </div>
  );
};

export default Navbar;
