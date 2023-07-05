/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count >= target) {
      clearInterval();
    }
  }, [count, target]);

  return (
    <div className="countdown">
      <div className="countdown-label">{label}</div>
      <div className="countdown-timer">{count}</div>
    </div>
  );
};

export default Countdown;
