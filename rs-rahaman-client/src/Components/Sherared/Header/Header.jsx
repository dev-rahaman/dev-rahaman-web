import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { saveAs } from "file-saver";
import { FaBars, FaCloudDownloadAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const resumeUrl = "/public/rs-abdur-rahaman-sultany-resume.pdf";
    const fileName = "rs-abdur-rahaman-sultany-cv.pdf";
    saveAs(resumeUrl, fileName);
  };

  return (
    <>
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/" className="navbar-logo">
            RS RAHAMAN
          </Link>
        </div>
        <button className="menu__toggle" onClick={toggleMenu}>
          {isOpen ? (
            "X"
          ) : (
            <>
              <FaBars />
            </>
          )}
        </button>
        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          <li className="menu__item">
            <span className="header-number">01.</span> <Link to="/">Home</Link>
          </li>
          <li className="menu__item">
            <span className="header-number ">02.</span>{" "}
            <Link to="/about">About</Link>
          </li>
          <li className="menu__item">
            <span className="header-number ">02.</span>{" "}
            <Link to="/resume">Resume</Link>
          </li>
          <li className="menu__item">
            <span className="header-number ">02.</span>{" "}
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="menu__item">
            <span className="header-number ">05.</span>
            <Link to="/work-simple">Work Simple</Link>
          </li>

          <li className="navbar-item">
            <div className="btn" onClick={handleDownload}>
              <FaCloudDownloadAlt
                style={{
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
              Download CV
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
