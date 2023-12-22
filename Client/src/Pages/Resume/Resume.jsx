/* eslint-disable react/prop-types */
import React from "react";
import "./Resume.css";
import ResumePhape from "../../Components/ResumePhape/ResumePhape";
import { Link } from "react-router-dom";

const RESUMEPROJECTLINK = ({ Link, name }) => {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-project-link"
    >
      {name}
    </a>
  );
};

const Resume = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          color: "var(--secondary)",
        }}
      >
        My Resume
      </h2>
      <div className="shape-container">
        <ResumePhape
          itemTitle={"About Me"}
          number={"5"}
          date={"2023 - Now"}
          shapeHeading={"Abdur Rahaman Sultany"}
          shapeTitle={"MERN Stack Developer"}
          shapePara={
            "I am a seasoned MERN Stack developer, bringing years of expertise to the table in crafting intuitive and captivating user interfaces for web applications. My proficiency extends across CSS, JavaScript, React.js, Next.js, and Redux. Committed to staying at the forefront of the industry, I consistently incorporate the latest trends and adhere to best practices in both front-end and full-stack development. he consistently delivers innovative and seamless solutions that exceed client expectations. Clients can trust in his unwavering dedication to excellence for their projects."
          }
        ></ResumePhape>
        <ResumePhape
          itemTitle={"Education"}
          number={"2"}
          date={"2023 - Now"}
          shapeHeading={"Master in Islamic Scholarship & Web Development"}
          shapeTitle={"New York University"}
          shapePara={
            "In 2021, I completed my master's in Islamic scholarship. Seeking a new challenge, I ventured into computer science, focusing on web development. Now, I'm a full-stack developer with expertise in the MERN stack. I've successfully completed the 'Complete Web Development in MERN Stack' course and contributed to various team projects on platforms like Fiverr and Upwork. This journey reflects my adaptability and commitment to continuous learning, and I look forward to making further strides in the dynamic field of technology."
          }
        ></ResumePhape>

        <ResumePhape
          itemTitle={"Experiences"}
          number={"1"}
          date={"2023 - Now"}
          shapeHeading={"Owner and CEO of yourpost.com"}
          shapeTitle={"Owner and CEO"}
          shapePara={
            "yourpost.com is A revolutionary all-in-one social media platform combining the best features of Facebook, LinkedIn, Instagram, and Twitter. Share images, videos, and articles, and go live to express yourself. Engage with others through likes, comments, and follows. Join or create interest-based groups. Share posts not only on the platform but also on external websites for wider reach. Regular updates ensure a cutting-edge experience. Join ATG-post today for a dynamic, user-friendly social media journey."
          }
        ></ResumePhape>

        <ResumePhape
          itemTitle={"Skills"}
          number={"3"}
          date={"2023 - Now"}
          shapeHeading={"I have Good Experience in"}
          shapeTitle={"Web Development"}
          shapePara={
            "HTML, CSS, JavaScript, MERN Stack, React.js, Next.js, Node.js, Express.js,  socket.io, Firebase, MongoDB, Monggose, TailwindCSS, Bootstrap. I have worked a lot of projects with those technologies. in E-commerce store, Social media platform, E-learning platforms, Project management tools, Booking and reservation systems, Food delivery and restaurant reservation, Health and fitness Website, Music and video streaming services, News and media websites, Conversion PSD/XD/Figma, Job portals and freelance marketplaces"
          }
        ></ResumePhape>
        {/* <ResumePhape
          itemTitle={"Projects"}
          number={"4"}
          date={"2023 - Now"}
          shapeHeading={"Some projects I've worked on"}
          shapeTitle={
            "ATG-Post, The-Cookers, Alive-baby, Dream Jobs, Romo Blogs, Skill-Zone, Cryptiam and more."
          }
          shapePara={
            '<a href="https://example.com">ATG-post: The Ultimate Social Media Experience!</a> Post, Comment, share, Connect Join, and engage with - the all-in-one platform combining Facebook, LinkedIn, Instagram, Twitter, and Other Social media'
          }
        ></ResumePhape> */}
        <ResumePhape
          itemTitle={"Projects"}
          number={"4"}
          date={"2023 - Now"}
          shapeHeading={"Some projects I've worked on"}
          shapeTitle={"Live Projects"}
          shapePara={
            <>
              <RESUMEPROJECTLINK
                Link="https://gov-tin.web.app/"
                name={"Gov Tin BD"}
              />
              <RESUMEPROJECTLINK
                Link="https://dev-rahaman.github.io/Javlaba/"
                name={"Javlaba HTML CSS Website"}
              />
              <RESUMEPROJECTLINK
                Link="https://alive-baby.web.app/"
                name={"Alive Baby"}
              />
              <RESUMEPROJECTLINK
                Link="https://mern-faq.web.app/"
                name={"ProshnoPotro"}
              />
              <RESUMEPROJECTLINK
                Link="https://resume-template-project.vercel.app/"
                name={"KIRITI KOMARAGIRI"}
              />
              <RESUMEPROJECTLINK
                Link="https://e-cmmerce-dashboard.vercel.app/dashboard"
                name={"Vendor BD"}
              />
              <RESUMEPROJECTLINK
                Link="https://sultany-template-y6zm.vercel.app/"
                name={"Sultany Template"}
              />
              <RESUMEPROJECTLINK
                Link="https://sultany-template-y6zm.vercel.app/"
                name={"Restaurant Website"}
              />
              <RESUMEPROJECTLINK
                Link="https://the-cooker-52354.web.app/"
                name={"The Cooker"}
              />
              <RESUMEPROJECTLINK Link="#" name={"Toy Marketplace"} />
              <RESUMEPROJECTLINK
                Link="https://skillz-zone.web.app/"
                name={"Skills Zone"}
              />
              <RESUMEPROJECTLINK
                Link="https://upwrok-1.vercel.app/"
                name={"Edit and Update Agency Website"}
              />
              <RESUMEPROJECTLINK
                Link="#"
                name={"Working Project Fix Bug on Quiz Hero"}
              />
              <RESUMEPROJECTLINK
                Link="#"
                name={"Working Project Fix Bug on Quiz Hero"}
              />
            </>
          }
        ></ResumePhape>

        <ResumePhape
          itemTitle={"tools"}
          number={"6"}
          date={"2023 - Now"}
          shapeHeading={"I have worked on popular web development tools"}
          shapeTitle={"MERN Stack"}
          shapePara={
            "JavaScript, React.js, Next.sjs, DOM,  Express.js, Node.js, MongoDB, Redux, socket.io, Firebase, Monggose, Devtool, React-Router-Dom,  git & GitHub Es6, Debugging, Vercel, Netlify, NPM, API, RestAPI, JWT token,VScode, CSS, TailwindCSS, Bootstrap, bcrypt"
          }
        ></ResumePhape>
      </div>
      <div></div>
      <a href=""></a>
    </div>
  );
};

export default Resume;
