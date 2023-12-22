import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <Link to={"/"}>
          <img
            src="https://i.postimg.cc/6pJMJVvt/logo.png"
            className="logo footer-logo"
            style={{ width: "250px" }}
          />
        </Link>
        <p className="footer-paragraph">
          I`m Abdur Rahaman Sultany, an accomplished web developer/designer
          since 2021. With 400+ live web projects across MERN Stack, NextJs,
          Redux, HTML, CSS, JS, and WordPress, I bring visions to life.
        </p>
        <form className="footer-form">
          <input type="email" name="subscribe" id="" className="subscribe" />
          <button type="submit" className="subscribe-btn">
            Subtribe
          </button>
        </form>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p className="footer-link">
          <strong>Location: </strong>
          <ActiveLink
            target="blank"
            to={"https://maps.app.goo.gl/2AC7ovxnUD6vZvK96"}
          >
            Kaneshtala Shadar Dakhshin Comilla Bangladesh
          </ActiveLink>
        </p>
        <p className="footer-link">
          <strong>Phone: </strong>
          <ActiveLink to={"tel:01601313258"}>+88 01601313258</ActiveLink>
          <ActiveLink to={"tel:01619512068"}>+88 01619512068</ActiveLink>
        </p>
        <p className="footer-link">
          <strong>Mail: </strong>
          <ActiveLink to={"mailto:rsabdurrahamansultany3@gamil.com"}>
            rsabdurrahamansultany3@gamil.com
          </ActiveLink>
        </p>
        <p className="footer-link">
          <strong>Working Hours</strong> : 13/14 hrs
        </p>
      </div>
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li>
            <ActiveLink to={"/"}>Branding & Identity</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/projects"}>Web Design & Development</ActiveLink>
          </li>
          <li>
            <ActiveLink
              to={"https://www.linkedin.com/in/dev-rahaman/"}
              target={"target"}
            >
              Linkedin
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to={"https://github.com/dev-rahaman"} target={"target"}>
              GitHub
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              to={"https://twitter.com/dev_rahaman"}
              target={"target"}
            >
              X (Twitter){" "}
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              to={"https://www.facebook.com/rahamandev"}
              target={"target"}
            >
              Facebook
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              to={"https://www.instagram.com/dev_rahaman/"}
              target={"target"}
            >
              Instagram
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              to={"https://www.youtube.com/@dev-rahaman"}
              target={"target"}
            >
              YouTube Channel
            </ActiveLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
