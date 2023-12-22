import { Link } from "react-router-dom";
import "./Banners.css";

const Banners = () => {
  return (
    <div>
      <div className="banner">
        <h3 className="title">Hi, my name is</h3>
        <h1 className="name1">Abdur Rahaman Sultany.</h1>
        <h1 className="name">I build Web and things for Internet.</h1>
        <p>
          I`m Abdur Rahaman Sultany, a dedicated MERN-Stack developer with a
          passion for bringing visions to life. With a rich portfolio of over
          700 live web projects spanning MERN Stack, React, NextJs, Node,
          Express, MongoDB, HTML, CSS, JS, and WordPress, I thrive on turning
          ideas into reality. Proud to be associated with
          <span className="bannar-para-hover"> Upstatement</span>.
        </p>
        <Link to={"/projects"} className="btn">
          Check out my project!
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Banners;
