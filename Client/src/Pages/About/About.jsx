import React from "react";
import "./About.css";
import { IoMdSettings } from "react-icons/io";
import ContactForm from "../Contact/ConatactForm/ContactForm";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="border-cart-container">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFzDB0Hloc1eQ/profile-displayphoto-shrink_800_800/0/1671884408461?e=2147483647&v=beta&t=743ayqa4idkkA7gxfoAm6ieqbVB09pHSan-lZD0AeAg"
            className="contact-cart-image"
            alt=""
          />
        </div>
        <div className="about-my-photo-container">
          <img
            src="/abdur-rahaman sultany.png"
            className="about-my-photo"
            alt=""
          />
          <h2 className="cart-heading">Abdur Rahaman Sultnay</h2>
        </div>
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
          React.js, Node.js) stack, allowing him to create robust and dynamic
          web applications. With a deep understanding of these cutting-edge
          technologies, he seamlessly integrates them to deliver innovative
          solutions that meet and exceed client expectations. The Power of
          Teamwork: Fostering Collaboration and Innovation I`m recognizes the
          value of collaboration and the collective strength of a team. With a
          dedicated group of talented individuals in web development, I fosters
          an environment where ideas flourish and innovation thrives. By
          harnessing the collective expertise of my team, I ensures that every
          project receives meticulous attention to detail, comprehensive
          problem-solving, and timely delivery. A Passion for Seamless Solutions
          coding is
          <br /> <br />
          <span>The Code Lover: </span>
          not just my job; also it`s a my passion. With a deep love for HTML,
          CSS, JavaScript, React, Node, Mongodb, Express, etc. and other
          programming languages, I navigates the intricacies of coding with
          ease. This profound understanding allows me to create robust,
          scalable, and efficient solutions, ensuring seamless user experiences
          and optimal performance.
          <br />
          <br />
          <span>Conclusion: </span>
          Abdur Rahaman Sultany`s journey as a MERN Stack Developer showcases
          the true power of passion, expertise, and relentless dedication to
          delivering exceptional solutions. By harnessing the capabilities of
          modern technologies, fostering teamwork, and embracing the art of
          coding, Abdur Rahaman Sultany consistently delivers innovative and
          seamless web applications. With Abdur Rahaman Sultany at the helm,
          clients can rest assured that their projects are in the hands of a
          true professional who will go above and beyond to exceed expectations.
        </p>
      </div>
      <h2 className="center ">Contact Me</h2>
      <ContactForm />
    </>
  );
};

export default About;
