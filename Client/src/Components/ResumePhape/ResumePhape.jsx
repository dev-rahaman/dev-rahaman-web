/* eslint-disable react/prop-types */
import React from "react";
import "./ResumePhape.css";

const ResumePhape = ({
  itemTitle,
  number,
  date,
  shapeHeading,
  shapeTitle,
  shapePara,
}) => {
  return (
    <div>
      <div className="shape">
        <div className="item-title ">
          <h2 className="item-title">{itemTitle}</h2>
        </div>
        <div className="shape-header">
          <div className="number">{number}</div>
          <div className="date">{date}</div>
        </div>
        <div className="shape-content">
          <h2 className="shape-heading">{shapeHeading}</h2>
          <p className="shape-title">{shapeTitle}</p>
          <p className="shape-para">{shapePara}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePhape;
