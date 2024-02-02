import About from "./About";
import "./AboutBanner.css";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <>
      <div className="home__bannar">
        <div className="home__bannar__bottom">
          <div className="home__bannar__top">
            <span className="home__bannar__top__txt">
              <span>Full Stack Developer</span>
            </span>
          </div>
          <div className="home__bannar__heading">
            <div className="home__bannar__heading__txt">
              <span className="home__bannar__heading__txt ">
                Abdur Rahaman Sultany
              </span>
            </div>
            <div className="home__bannar__para">
              <p className="home__bannar__para__txt">
                I am Abdur Rahman Sultany, a skilled web developer/designer
                since 2021. Developed countless live websites across MERN Stack,
                NextJs, HTML, CSS, JavaScript
              </p>
            </div>
            <div className="home__bannar__btn">
              <Link to="#">DISCOVER MORE</Link>
              <Link to="/contact">HIRE ME NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default AboutBanner;
