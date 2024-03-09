import React from "react";
import { Link } from "react-router-dom";

const ServicesBanner = () => {
  return (
    <div className="container">
      <video className="background-clip" autoPlay muted loop playsInline>
        <source src="/coding-video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>My Services</h1>
        <Link className="btn" to="/contact">
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default ServicesBanner;
