import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://rs-rahaman.vercel.app/work-simple")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  console.log(projects);

  return (
    <>
      <div className="card-container">
        {projects.map((project, idx) => (
          <div
            className="project-card"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${project.projectImage}") center/cover`,
            }}
            key={idx}
          >
            <div className="project-details">
              <h3 className="about-me-title">{project.projectName}</h3>
              <p className="home__bannar__para__txt">
                {project.projectDescription.slice(0, 150)}
                <strong>&hellip;</strong>
              </p>
              <Link to={`/projects/${project._id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
