import React from "react";
import "./About.css";
import VideoIntroduction from "../../../Components/VideoIntodruction/VideoIntroduction";

const AboutHome = () => {
  return (
    <div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-me-text">
          <div className="left-section">
            <p>
              Hello! My name is Abdur Rahaman Sultany and I enjoy creating
              things that live on the internet. My interest in web development
              started in 2021 when I decided to try to explore computer science.
            </p>
            <p>
              Fast-forward to today, and I’ve had the of working at a start-up,
              a huge corporation. My main focus these days is building an
              accessible full-stack website.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app.
            </p>
          </div>
          <div className="right-image">
            <img
              className="img"
              src="https://i.postimg.cc/bwQhWYkB/devrahaman.jpg"
              alt="me photo"
              width="300px"
            />
            <div className="img-section"></div>
            <div className="img-section2"></div>
          </div>
        </div>
      </div>
      <VideoIntroduction />
    </div>
  );
};

export default AboutHome;
