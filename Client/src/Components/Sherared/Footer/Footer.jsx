import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="'../../public/logo.png" className="logo footer-logo" />
        <p className="footer-paragraph">
          Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim.
          Aliquam vestibulum morbi blandit cursus risus. Ultrices vitae auctor
          eu augue ut lectus. Ultricies integer quis auctor elit sed vulputate
          mi sit amet.
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
            target="_blank"
            to={"https://maps.app.goo.gl/2AC7ovxnUD6vZvK96"}
          >
            Kaneshtala Shadar Dakhshin Comilla Bangladesh
          </ActiveLink>
        </p>
        <p className="footer-link">
          <strong>Phone: </strong>
          <ActiveLink to={"tel:01601313258"}>+88 01601313258</ActiveLink>
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
            <ActiveLink to={"/brandingIdentity"}>
              Branding & Identity
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/WebDesignDevelopment"}>
              Web Design & Development
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/UiUXDesigning"}>UI & UX Designing</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/digitalMarketing"}>Digital Marketing</ActiveLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
