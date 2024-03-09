import React from "react";
import "./Blog.css";

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
            <span className="date">October 16, 2023</span>
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
              <p>Shear: 2</p>
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
            <span className="date">October 16, 2023</span>
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
              <p>Shear: 2</p>
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
            <span className="date">October 16, 2023</span>
            <h2 className="blog-title">
              The Science Of Mobile App Development
            </h2>
            <div className="blog-footer">
              <p>Comments: 5</p>
              <p>Likes: 10</p>
              <p>Shear: 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
