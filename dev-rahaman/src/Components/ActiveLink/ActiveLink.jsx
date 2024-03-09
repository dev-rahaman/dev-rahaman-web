/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children, target }) => {
  return (
    <div>
      <NavLink
        target={target}
        to={to}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
