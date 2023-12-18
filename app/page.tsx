import React from "react";
import {
  Navbar,
  HomeSlide1,
  HomeSlide2,
  HomeSlide3,
  HomeSlide4,
  HomeSlide5,
  Footer,
} from "./components/index";
const Home = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <HomeSlide1 />
      <HomeSlide2 />
      <HomeSlide3 />
      <HomeSlide4 />
      <HomeSlide5 />
      <Footer />
    </div>
  );
};

export default Home;
