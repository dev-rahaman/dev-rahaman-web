import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Sherared/Header/Header";
import Footer from "../Components/Sherared/Footer/Footer";
import CopyRight from "../Components/copyRight/copyRight";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <CopyRight />
    </div>
  );
};

export default Main;
