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
          itemTitle={"Experiences"}
          number={"1"}
          date={"2023 - Now"}
          shapeHeading={"Founder & Creative Director"}
          shapeTitle={"Kyros Studio"}
          shapePara={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
          }
        ></ResumePhape>
        <ResumePhape
          itemTitle={"Education"}
          number={"2"}
          date={"2023 - Now"}
          shapeHeading={"Master in Design"}
          shapeTitle={"New York University"}
          shapePara={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
          }
        ></ResumePhape>
        <ResumePhape
          itemTitle={"Skills"}
          number={"3"}
          date={"2023 - Now"}
          shapeHeading={"Founder & Creative Director"}
          shapeTitle={"Kyros Studio"}
          shapePara={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
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
          shapeTitle={
            "ATG-Post, The-Cookers, Alive-baby, Dream Jobs, Romo Blogs, Skill-Zone, Cryptiam and more."
          }
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
                name={" sultany-template"}
              />
            </>
          }
        ></ResumePhape>

        <ResumePhape
          itemTitle={"About Me"}
          number={"5"}
          date={"2023 - Now"}
          shapeHeading={"Abdur Rahaman Sultany"}
          shapeTitle={"MERN Stack Developer"}
          shapePara={
            "I'm an experienced MERN Stack developer with years of expertise in creating intuitive and engaging user interfaces for web applications. I have a deep understanding of CSS, JavaScript, Reactjs, Nextjs Redux, and I stay up-to-date with the latest trends and best practices in front-end and full-stack development."
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
