import React from "react";
import Banners from "./Banner/Banners";
import AboutHome from "./AboutHome/About";
import HomeWorkSimple from "./HomeWorkSimple/HomeWorkSimple";
import AlertBox from "../../Components/Alert/AlertBox";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <div className="home">
        <Banners></Banners>
        {/* <AlertBox></AlertBox> */}
        <AboutHome></AboutHome>
      </div>
      {/* <HomeWorkSimple></HomeWorkSimple> */}
      <h2 className="title-center">Projects</h2>
      <Projects />
    </>
  );
};

export default Home;
