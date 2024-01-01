import React from "react";
import "./testmonials.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <img
          src={"/devRahamanSmile.jpg"}
          alt={`Avatar of abdur-rahaman sultany`}
          className="avatar"
        />
        <div>
          <div className="testimonial-ratings">
            {/* {Array.from({ length: rating }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))} */}
            <span> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
          </div>
          <h3 className="testimonial-name">restoremobility</h3>
          <div className="testimonial-title">
            <img src="/USA.png" alt="" width={20} className="flag" />
            <span>United States</span>
          </div>
          <div className="testimonial-review-container">
            <p className="testimonial-review">
              Working with Dev Rahaman on my books website was fantastic! The
              site beautifully showcases. Dev demonstrated top-notch skills and
              communication. Highly recommend!
            </p>
            <div>
              <img
                src="/review-image.png"
                alt=""
                className="testimonial-review-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <img
          src={"/devRahamanSmile.jpg"}
          alt={`Avatar of abdur-rahaman sultany`}
          className="avatar"
        />
        <div>
          <div className="testimonial-ratings">
            {/* {Array.from({ length: rating }, (_, index) => (
            <span key={index}>&#9733;</span>
          ))} */}
            <span> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
          </div>
          <h3 className="testimonial-name">javlaba</h3>
          <div className="testimonial-title">
            <img src="/USA.png" alt="" width={20} className="flag" />
            <span>United States</span>
          </div>
          <div className="testimonial-review-container">
            <p className="testimonial-review">
              He was very communicative and prompt eith the delivery of my
              serice. I would absolutely order from him again
            </p>
            <div>
              <img
                src="/review-image.png"
                alt=""
                className="testimonial-review-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
