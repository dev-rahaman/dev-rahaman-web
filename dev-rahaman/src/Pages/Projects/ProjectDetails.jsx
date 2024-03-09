import { Link, useLoaderData } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const loadData = useLoaderData();
  const {
    projectName,
    projectTitle,
    projectDescription,
    review,
    gitHub,
    liveLink,
    backgroundImage,
    videoLink,
    simpleImage,
  } = loadData;

  return (
    <div>
      <div>
        <div
          className="overlay project-name-container"
          style={{
            background: `url("${backgroundImage}") center/cover`,
            backgroundAttachment: "fixed",
          }}
        >
          <h2 className="project-name">{projectName}</h2>
          <p>{projectTitle}</p>
        </div>
        <div className="project-details-container">
          <div className="project-details-container-left">
            <div className="description">
              <h2 className="project-title">Description :</h2>
              <p className="project-para">{projectDescription}</p>
            </div>
            <div className="description">
              <h2 className="project-title">Review:</h2>
              <p className="project-para">{review}</p>
            </div>
          </div>
          <div className="project-details-container-right">
            <img
              src={simpleImage}
              alt=""
              className="project-details-container-right"
            />
          </div>
        </div>
        <div className="link-middle home__bannar__btn">
          <Link to={liveLink} target="_blank" className=" ">
            Live View
          </Link>
          <Link to={gitHub} target="_blank" className="btn">
            Code on GitHub
          </Link>
        </div>
        <div className="video">
          <iframe
            className="iframe"
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
