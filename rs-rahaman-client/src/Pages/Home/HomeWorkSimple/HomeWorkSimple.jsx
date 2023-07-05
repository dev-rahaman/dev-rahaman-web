import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const HomeWorkSimple = () => {
  const loadData = useLoaderData();
  const threeData = loadData.slice(0, 3);
  return (
    <>
      {threeData.map((item, idx) => (
        <div key={idx}>
          <div style={{ padding: "50px 150px", overflow: "hidden" }}>
            <div
              className={
                idx % 2 === 0
                  ? "work-simple-section"
                  : "work-simple-two-section"
              }
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="work-simple-left">
                    <img
                      className="work-simple-img"
                      src={item.picture}
                      alt="picture"
                      width="600px"
                      height="375px"
                    />
                    <div className="work-simple-img-bg-section"></div>
                  </div>
                  <div
                    className={
                      idx % 2 === 0
                        ? "work-simple-right"
                        : "work-simple-two-right"
                    }
                  >
                    <h2
                      className={
                        idx % 2 === 0
                          ? "work-simple-title"
                          : "work-simple-two-title"
                      }
                    >
                      {item.projectName}
                    </h2>
                    <h2
                      className={
                        idx % 2 === 0
                          ? "work-simple-heading"
                          : "work-simple-two-heading"
                      }
                    >
                      {item.projectTitle}
                    </h2>
                    <p
                      className={
                        idx % 2 === 0
                          ? "work-simple-right-para"
                          : "work-simple-two-right-para"
                      }
                    >
                      {item.description}
                    </p>
                    <div
                      className={
                        idx % 2 === 0
                          ? "work-simple-right-footer"
                          : "work-simple-two-right-footer"
                      }
                    >
                      {item.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                      <div
                        className={
                          idx % 2 === 0
                            ? "work-simple-right-footer-icon"
                            : "work-simple-two-right-footer-icon"
                        }
                      >
                        <Link to={item.live} target="_blank">
                          <span>
                            <FaExternalLinkAlt className="icons" />
                          </span>
                        </Link>
                        <Link to={item.gihub} target="_blank">
                          <span>
                            <FaGithub className="icons" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={
                      idx % 2 === 0
                        ? "work-simple-right"
                        : "work-simple-two-right"
                    }
                  >
                    <h2
                      className={
                        idx % 2 === 0
                          ? "work-simple-title"
                          : "work-simple-two-title"
                      }
                    >
                      {item.projectName}
                    </h2>
                    <h2
                      className={
                        idx % 2 === 0
                          ? "work-simple-heading"
                          : "work-simple-two-heading"
                      }
                    >
                      {item.projectTitle}
                    </h2>
                    <p
                      className={
                        idx % 2 === 0
                          ? "work-simple-right-para"
                          : "work-simple-two-right-para"
                      }
                    >
                      {item.description}
                    </p>
                    <div
                      className={
                        idx % 2 === 0
                          ? "work-simple-right-footer"
                          : "work-simple-two-right-footer"
                      }
                    >
                      {item.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                      <div
                        className={
                          idx % 2 === 0
                            ? "work-simple-right-footer-icon"
                            : "work-simple-two-right-footer-icon"
                        }
                      >
                        <Link to={item.live} target="_blank">
                          <span>
                            <FaExternalLinkAlt className="icons" />
                          </span>
                        </Link>
                        <Link to={item.gihub} target="_blank">
                          <span>
                            <FaGithub className="icons" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="work-simple-left rrr">
                    <img
                      className="work-simple-img"
                      src={item.picture}
                      alt="picture"
                      width="600px"
                      height="375px"
                    />
                    <div className="work-simple-img-bg-section"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeWorkSimple;
