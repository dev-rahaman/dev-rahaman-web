import { Link } from "react-router-dom";
import "./Banners.css";

const Banners = () => {
  return (
    <div>
      <div className="banner">
        <h3 className="title">Hi, my name is</h3>
        <h1 className="name1">Abdur Rahaman Sultany.</h1>
        <h1 className="name">I build Web and things for Enternet.</h1>
        <p>
          I’m Abdur Rahaman Sultany Passionate at full stack development. My
          goal is to satisfy clients, try to understand what they want for their
          website, help them from beginning to end with the project, and give
          support for every problem.
          <span className="bannar-para-hover"> Upstatement</span>.
        </p>
        <Link to={"/work-simple"} className="btn">
          Check out my project!
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Banners;
