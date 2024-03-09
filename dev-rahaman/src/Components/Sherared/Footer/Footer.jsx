import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://dev-rahaman-server.vercel.app/subscriber",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      console.log(data);
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          I am Abdur Rahman Sultany, a skilled web developer/designer since
          2021. Developed countless live websites across MERN Stack, NextJs,
          HTML, CSS, JavaScript
        </p>
        <form onSubmit={handleSubmit} className="footer-form">
          {/* <input type="email" name="subscribe" id="" className="subscribe" /> */}
          <input
            type="email"
            name="subscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe"
            placeholder="Enter your email"
            required
          />
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
          <ActiveLink to={"mailto:rsabdurrahamansultany2@gamil.com"}>
            rsabdurrahamansultany2@gamil.com
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
            <ActiveLink to={"/about"}>Branding & Identity</ActiveLink>
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
