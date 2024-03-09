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
          I am Abdur Rahman Sultany, a skilled web developer/designer since
          2021. Developed countless live websites across MERN Stack, NextJs,
          HTML, CSS, JavaScript
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
