import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Sherared/Header/Header";
import Footer from "../Components/Sherared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
