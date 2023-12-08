import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Resume", link: "/resume" },
  { text: "Blogs", link: "/blogs" },
  { text: "Services", link: "/services" },
  { text: "Projects", link: "/projects" },
  { text: "Contact", link: "/contact" },
  // { text: "Work Simple", link: "/work-simple" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div>
        <Link to={"/"}>
          <img src="'../../public/logo.png" className="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-links">
        {navLinks.map((item, index) => (
          <li key={index} onClick={toggleMenu}>
            <ActiveLink to={item.link}>{item.text}</ActiveLink>
          </li>
        ))}
        <button className="btn">Download CV</button>
      </ul>
    </nav>
  );
};

export default Navbar;
