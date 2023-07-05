import React from "react";
import "./About.css";

const AboutHome = () => {
  return (
    <div className="about-me">
      <h2 className="home about-me-title">
        <span className="header">2.</span> About Me
      </h2>
      <div className="about-me-text">
        <div className="left-section">
          <p>
            Hello! My name is abdur rahaman sultany and I enjoy creating things
            that live on the internet. My interest in web development started in
            2021when I decided to try explore computer science.
          </p>
          <p>
            Fast-forward to today, and I’ve had the of working at an a start up,
            a huge corporation. My main focus these days is building accessible
            full stack website.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the MERN Stack.
          </p>
          <p>Here are a few software I’ve been working with recently:</p>
        </div>
        <div className="right-image">
          <img
            className="img"
            src="https://rs-rahaman.github.io/Brittany-LG/img/rs%20abdur%20rhaman%20sultnay.jpg"
            alt="me photo"
            width="300px"
          />
          <div className="img-section"></div>
          <div className="img-section2"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
