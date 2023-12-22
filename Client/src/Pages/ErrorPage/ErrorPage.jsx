import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <h2 className="">Oopps!</h2>
      <h3>404 Page not Found</h3>
      <Link to={"/"} className="btn">
        Go to Home Page
      </Link>
    </div>
  );
}
