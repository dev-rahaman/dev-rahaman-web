import React from "react";
import "./CopyRight.css";

const CopyRight = () => {
  return (
    <div className="copy-right-container">
      <div>
        <p className="footer-content">
          &copy; <span id="currentYear">2024</span> Dev Rahaman. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
