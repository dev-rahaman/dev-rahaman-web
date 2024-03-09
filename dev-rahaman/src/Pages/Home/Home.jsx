import React from "react";
import Banners from "./Banner/Banners";
import AboutHome from "./AboutHome/About";
import HomeWorkSimple from "./HomeWorkSimple/HomeWorkSimple";
import AlertBox from "../../Components/Alert/AlertBox";
import Projects from "../Projects/Projects";
import ClientReview from "../../Components/ClientReview/ClientReview";
import Marquee from "../../Components/Marquee/Marquee";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <AlertBox></AlertBox> */}
        <Banners></Banners>
        <AboutHome></AboutHome>
      </div>
      {/* <HomeWorkSimple></HomeWorkSimple> */}
      <h2 className="title-center">Projects</h2>
      <Projects />
      <h2 className="title-center">Client Review</h2>
      <ClientReview />
      <Marquee />
    </>
  );
};

export default Home;
