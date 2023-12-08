import { useLoaderData } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const loadData = useLoaderData();
  const { projectName, projectTitle, description, gihub, live, picture, tags } =
    loadData;

  return (
    <div>
      <div>
        <div className="overlay project-name-container">
          <h2 className="project-name">{projectName}</h2>
        </div>
        <div className="project-details-container">
          <div className="project-details-container-left">
            <div className="description">
              <h2 className="project-title">Description :</h2>
              <p className="project-para">{description}</p>
            </div>
            <div className="description">
              <h2 className="project-title">Client :</h2>
              <p className="project-para">
                Maecenas eu vehicula felis Aen ean eleme ntum tortor ac nu
                Aliquam erat volutpat. Nulla molestie risus eget nibh mollis
                ultricies. Integer porttitor vehicula nisi, sit amet volutpat
                erat tincidunt non.
              </p>
            </div>
            <div className="description">
              <h2 className="project-title">Review:</h2>
              <p className="project-para">
                Vehicula maecenas eu felis Aen ean elementum
              </p>
            </div>
          </div>
          <div className="project-details-container-right">
            <img
              src="https://i.postimg.cc/Zn2mtCw1/project-details.jpg"
              alt=""
              className="project-details-container-right"
            />
          </div>
        </div>
        <div className="video">
          <iframe
            width="95%"
            height="600px"
            style={{ margin: "0 30px" }}
            src="https://www.youtube.com/embed/uliYkHK3pKg?si=TR1WeaxsZzzjnZf5"
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
