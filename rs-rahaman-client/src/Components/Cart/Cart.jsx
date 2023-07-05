import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Cart = () => {
  return (
    <div className="cart">
      <div className="border-cart-container">
        <img
          src="https://media.licdn.com/dms/image/D5603AQFzDB0Hloc1eQ/profile-displayphoto-shrink_800_800/0/1671884408461?e=2147483647&v=beta&t=743ayqa4idkkA7gxfoAm6ieqbVB09pHSan-lZD0AeAg"
          className="contact-cart-image"
          alt=""
        />
      </div>
      <h2 className="cart-heading">Abdur Rahaman Sultnay</h2>
      <div className="settings-animation">
        <div>
          <IoMdSettings className="art" />
        </div>
        <h3 className="cart-title">Full Stack Developer</h3>
        <div>
          <IoMdSettings className="art2" />
        </div>
      </div>
      <p className="cart-bio">
        <span> Introduction: </span> A professional MERN Stack Developer who
        brings passion, expertise, and a relentless pursuit of perfection to
        every project.
        <br />
        <br />
        <span> MERN Stack Expertise: </span>
        Harnessing the Power of Modern Technologies Abdur Rahaman Sultany
        possesses exceptional expertise in the MERN (MongoDB, Express.js,
        React.js, Node.js) stack, allowing him to create robust and dynamic web
        applications. With a deep understanding of these cutting-edge
        technologies, he seamlessly integrates them to deliver innovative
        solutions that meet and exceed client expectations. The Power of
        Teamwork: Fostering Collaboration and Innovation I`m recognizes the
        value of collaboration and the collective strength of a team. With a
        dedicated group of talented individuals in web development, I fosters an
        environment where ideas flourish and innovation thrives. By harnessing
        the collective expertise of my team, I ensures that every project
        receives meticulous attention to detail, comprehensive problem-solving,
        and timely delivery. A Passion for Seamless Solutions coding is
        <br /> <br />
        <span>The Code Lover: </span>
        not just my job; also it`s a my passion. With a deep love for HTML, CSS,
        JavaScript, React, Node, Mongodb, Express, etc. and other programming
        languages, I navigates the intricacies of coding with ease. This
        profound understanding allows me to create robust, scalable, and
        efficient solutions, ensuring seamless user experiences and optimal
        performance.
        <br />
        <br />
        <span>Conclusion: </span>
        Abdur Rahaman Sultany`s journey as a MERN Stack Developer showcases the
        true power of passion, expertise, and relentless dedication to
        delivering exceptional solutions. By harnessing the capabilities of
        modern technologies, fostering teamwork, and embracing the art of
        coding, Abdur Rahaman Sultany consistently delivers innovative and
        seamless web applications. With Abdur Rahaman Sultany at the helm,
        clients can rest assured that their projects are in the hands of a true
        professional who will go above and beyond to exceed expectations.
      </p>

      <p>
        Phone: <Link to={"tel:" + "01601313258"}>{"01601313258"}</Link>
      </p>
      <p className="cart-email">
        Email:
        <Link to={"mailto:" + " rsabdurrahamansultany2@gmail.com"}>
          {" "}
          rsabdurrahamansultany2@gmail.com
        </Link>
      </p>
      <div className="cart-social-links">
        <Link
          to={"https://www.linkedin.com/in/abdurrahamansultany/"}
          target="_blank"
        >
          <span className="social">
            <FaLinkedin />
          </span>
        </Link>
        <Link
          to={"https://www.facebook.com/rsabdurrahamansultany"}
          target="_blank"
        >
          <span className="social">
            <FaFacebook />
          </span>
        </Link>
        <Link
          to={"https://www.instagram.com/rsabdurrahamansultany/"}
          target="_blank"
        >
          <span className="social">
            <FaInstagram />
          </span>
        </Link>
        <Link to={"https://twitter.com/rs_rahaman_"} target="_blank">
          <span className="social">
            <FaTwitter />
          </span>
        </Link>
        <Link
          to={"https://www.pinterest.com/rsabdurrahamansultany/"}
          target="_blank"
        >
          <span className="social">
            <FaPinterest />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
