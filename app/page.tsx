import React from "react";

import img from "./../public/assets/Slide3.png";
import {
  Navbar,
  HomeSlide1,
  HomeSlide2,
  HomeSlide3,
  HomeSlide4,
  HomeSlide5,
  HomeSlide6ImageContent,
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
      <HomeSlide6ImageContent
        description={
          "uuytyutqufqwyftqwbv hgfha hgdhas gjag hja hjgasdf jdhgasjk mjghja"
        }
        image={img}
        title={"helllllllll"}
        link={"https://www.google.com/"}
      />

      <Footer />
    </div>
  );
};

export default Home;
