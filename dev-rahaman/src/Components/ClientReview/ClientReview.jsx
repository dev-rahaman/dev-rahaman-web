import React from "react";
import "./testmonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    avatar: "/devRahamanSmile.jpg",
    name: "restoremobility",
    rating: 5,
    countryFlag: "/USA.png",
    country: "United States",
    review:
      "He was very communicative and prompt with the delivery of my service. I would absolutely order from him again.",
    reviewImage: "/review-image.png",
  },
  {
    id: 2,
    avatar: "/devRahamanSmile.jpg",
    name: "javlaba",
    rating: 5,
    countryFlag: "/USA.png",
    country: "United States",
    review:
      "He was very communicative and prompt with the delivery of my service. I would absolutely order from him again.",
    reviewImage: "/review-image.png",
  },
  {
    id: 3,
    avatar: "/devRahamanSmile.jpg",
    name: "javlaba",
    rating: 5,
    countryFlag: "/USA.png",
    country: "United States",
    review:
      "He was very communicative and prompt with the delivery of my service. I would absolutely order from him again.",
    reviewImage: "/review-image.png",
  },
  {
    id: 4,
    avatar: "/devRahamanSmile.jpg",
    name: "javlaba",
    rating: 5,
    countryFlag: "/USA.png",
    country: "United States",
    review:
      "He was very communicative and prompt with the delivery of my service. I would absolutely order from him again.",
    reviewImage: "/review-image.png",
  },
];

const TestimonialSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="testimonials">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, idx) => (
          <div className="testimonial-container" key={idx}>
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                className="avatar"
              />
              <div>
                <div className="testimonial-ratings">
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <div className="testimonial-title">
                  <img
                    src={testimonial.countryFlag}
                    alt=""
                    width={20}
                    className="flag"
                  />
                  <span>{testimonial.country}</span>
                </div>
                <div className="testimonial-review-container">
                  <p className="testimonial-review">{testimonial.review}</p>
                  <div>
                    <img
                      src={testimonial.reviewImage}
                      alt=""
                      className="testimonial-review-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
