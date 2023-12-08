/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ startValue, endValue, interval }) => {
  const [progress, setProgress] = useState(startValue);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < endValue) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [progress, endValue, interval]);

  const calculateProgress = () => {
    return ((progress - startValue) / (endValue - startValue)) * 100;
  };

  useEffect(() => {
    setProgress(startValue);
  }, [startValue]);

  useEffect(() => {
    if (progress >= endValue) {
      setProgress(startValue);
    }
  }, [startValue, endValue, interval, progress]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${calculateProgress()}%` }}
        >
          <div className="progress-bar-text">
            {Math.round(calculateProgress())}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
