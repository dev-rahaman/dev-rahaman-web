import React from "react";
import "./blog.css";

const Blogs = () => {
  return (
    <div className="blog-card-container">
      <div className="blogs-card">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div className="blog-content-container">
          <div className="blog-content">
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <span className="date">October 16, 2023</span>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-card">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div className="blog-content-container">
          <div className="blog-content">
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <span className="date">October 16, 2023</span>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-card">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div className="blog-content-container">
          <div className="blog-content">
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <span className="date">October 16, 2023</span>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
