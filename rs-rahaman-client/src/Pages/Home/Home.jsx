import React from "react";
import Banners from "./Banner/Banners";
import AboutHome from "./AboutHome/About";
import HomeWorkSimple from "./HomeWorkSimple/HomeWorkSimple";
import AlertBox from "../../Components/Alert/AlertBox";

const Home = () => {
  return (
    <>
      <div className="home">
        <Banners></Banners>
        <AlertBox></AlertBox>
        <AboutHome></AboutHome>
      </div>
      <HomeWorkSimple></HomeWorkSimple>
    </>
  );
};

export default Home;
