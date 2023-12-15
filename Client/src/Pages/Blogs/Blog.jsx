import React from "react";
import "./blog.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blog-card-r">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div>
          <h2 className="blog-title">The Science Of Mobile App Development</h2>
          <p className="blog-para">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s
            <strong className="bold">...</strong>
          </p>
        </div>
        <a href="#" className="read-more">
          Read More
        </a>
        <div className="blog-footer">
          <span>October 16, 2023</span>
          <span>Comments: 5</span>
          <span>Likes: 10</span>
        </div>
      </div>
      <div className="blog-card-r">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div>
          <h2 className="blog-title">The Science Of Mobile App Development</h2>
          <p className="blog-para">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s
            <strong className="bold">...</strong>
          </p>
        </div>
        <a href="#" className="read-more">
          Read More
        </a>
        <div className="blog-footer">
          <span>October 16, 2023</span>
          <span>Comments: 5</span>
          <span>Likes: 10</span>
        </div>
      </div>
      <div className="blog-card-r">
        <div className="blog-header">
          <img className="blog-image" src="/blog.jpg" alt="Blog Image" />
          <span className="category">App Development</span>
        </div>
        <div>
          <h2 className="blog-title">The Science Of Mobile App Development</h2>
          <p className="blog-para">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s
            <strong className="bold">...</strong>
          </p>
        </div>
        <a href="#" className="read-more">
          Read More
        </a>
        <div className="blog-footer">
          <span>October 16, 2023</span>
          <span>Comments: 5</span>
          <span>Likes: 10</span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
