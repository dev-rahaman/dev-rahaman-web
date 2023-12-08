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
              <span>FULL STACK DEVELOPER</span>
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
                I`m Abdur Rahaman Sultany, an accomplished web
                developer/designer since 2021. With 700+ live web projects
                across MERN Stack, NextJs, Redux, HTML, CSS, JS, and WordPress,
                I bring visions to life.
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
