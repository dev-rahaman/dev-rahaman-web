import React from "react";
import "./Resume.css";
import ResumePhape from "../../Components/ResumePhape/ResumePhape";
import { Link } from "react-router-dom";

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
        <ResumePhape
          itemTitle={"Projects"}
          number={"4"}
          date={"2023 - Now"}
          shapeHeading={"Some projects I've worked on"}
          shapeTitle={
            "ATG-Post, The-Cookers, Alive-baby, Dream Jobs, Romo Blogs, Skill-Zone, Cryptiam and more."
          }
          shapePara={
            "ATG-post: The Ultimate Social Media Experience! Post, Comment, share, Connect Join, and engage with - the all-in-one platform combining Facebook, LinkedIn, Instagram, Twitter. and Other Social media"
          }
        ></ResumePhape>
        <ResumePhape
          itemTitle={"About Me"}
          number={"5"}
          date={"2023 - Now"}
          shapeHeading={"Founder & Creative Director"}
          shapeTitle={"Kyros Studio"}
          shapePara={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
          }
        ></ResumePhape>
        <ResumePhape
          itemTitle={"tools"}
          number={"6"}
          date={"2023 - Now"}
          shapeHeading={"I Worked Popular MERN Stack Tools"}
          shapeTitle={"Kyros Studio"}
          shapePara={
            "JavaScript, DOM, Express.js, Devtool, Node.js, Express.js, MongoDB, Monggose, React.js, React-Router-Dom, Firebase, GitHub Es6, Debugging, Hooks, Vercel, Netlify, NPM,  API,  RestAPI,JWT token,VScode, CSS, TailwindCSS, Bootstrap, bcrypt"
          }
        ></ResumePhape>
      </div>
      <div></div>
    </div>
  );
};

export default Resume;
