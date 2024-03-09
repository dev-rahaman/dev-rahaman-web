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
          <h2 className="cart-heading">Abdur Rahaman Sultany</h2>
        </div>
        <div className="settings-animation">
          <div>
            <IoMdSettings className="art" />
          </div>
          <h3 className="cart-title">Web Developer</h3>
          <div>
            <IoMdSettings className="art2" />
          </div>
        </div>
        <p className="cart-bio">
          <span> Introduction: </span> I am Abdur Rahman Sultany, a committed
          web developer driven by the fervor to bring visions to life on the
          internet. Armed with a robust portfolio showcasing numerous successful
          web projects leveraging technologies such as React, Next.js, Node.js,
          Express, MongoDB, HTML, CSS, and JavaScript, I possess the expertise
          to turn creative concepts into tangible, innovative solutions
          <br />
          <br />
          <span>Embarking on a Curious Journey </span>
          My journey in web development started in 2021, when I completed my
          Islamic graduation from{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%AF%E0%A6%BC%E0%A6%BE_%E0%A6%B0%E0%A6%B6%E0%A7%80%E0%A6%A6%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE_%E0%A6%AB%E0%A7%87%E0%A6%A8%E0%A7%80"
            className="link"
            target="_blank"
          >
            Jamia Rashidia
          </a>
          . And I started working to explore computer science.
          <br />
          <br />
          <span> Diverse experience, single focus:</span> Having experienced
          both startup and corporate environments, I prioritized my skills as a
          web developer and primarily focused on creating accessible and
          engaging websites. My portfolio boasts unlimited live web projects,
          showcasing a wide variety of skills and technologies.
          <br />
          <br />
          <span> Web Development Expertise: </span>
          Gained excellent skills in the power of modern technologies (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            className="link"
          >
            JavaScript
          </a>
          ,{" "}
          <a href="https://react.dev/" target="_blank" className="link">
            React
          </a>
          ,{" "}
          <a href="https://nextjs.org/" target="_blank" className="link">
            Next.js
          </a>
          ,{" "}
          <a href="https://www.mongodb.com/" target="_blank" className="link">
            MongoDB
          </a>
          ,{" "}
          <a href="https://nodejs.org/en" target="_blank" className="link">
            Node.js
          </a>
          ,{" "}
          <a href="https://expressjs.com/" target="_blank" className="link">
            Express
          </a>
          . etc ) which allows me to build powerful and dynamic web
          applications. With a deep understanding of these cutting-edge
          technologies, I deliver innovative solutions that meet and exceed
          client expectations.
          <br />
          <br />
          <span>Teamwork and Innovation </span>I value the power of teamwork.
          Surrounded by a dedicated group of talented people, I love working in
          an environment where ideas flourish and innovation takes center stage.
          Every project benefits from meticulous attention to detail,
          comprehensive problem solving and timely delivery.
          <br />
          <br />
          <span>Love coding as an art: </span>
          Not just my job; Also it is my passion. With a deep love for whom I
          can easily navigate the intricacies of coding. This deep understanding
          allows me to build robust, scalable, and efficient solutions, ensuring
          user experience and optimal performance.
          <br />
          <br />
          <span>A Comprehensive Approach to Education: </span>
          I am not satisfied with personal success only, I recently launched a
          comprehensive course that covers the essentials of creating a web app
          with modern technology completely free of charge. This initiative
          reflects his commitment to sharing knowledge and empowering others to
          start their own journey in web development.
          <br />
          <br />
          <span>Conclusion: </span>
          Abdur Rahaman Sultany's journey as a web developer is a testament to
          the power of passion, expertise, and relentless dedication to
          delivering exceptional digital solutions. By harnessing the
          capabilities of modern technologies, fostering teamwork, and embracing
          the art of coding, Sultany consistently delivers innovative and
          seamless web applications.
          <br />
          Clients and learners alike can rest assured that their projects and
          educational endeavors are in the hands of a true professional who goes
          above and beyond to exceed expectations. As the digital landscape
          continues to evolve, Abdur Rahaman Sultany stands at the forefront,
          shaping the online world with his creativity and technical prowess.
        </p>
      </div>
      <h2 className="center ">Contact Me</h2>
      <ContactForm />
    </>
  );
};

export default About;
