import React from "react";
import "./Services.css";
import ServicesBanner from "./ServicesBanner";

const cartItems = [
  {
    cart_img: "https://rsrahaman.github.io/hayRahaman/img/website.png",
    cart_heading: "Social media platforms",
    cart_paragraph:
      "Building social networking sites that allow users to create profiles, connect with friends, share posts, and engage in various social activities.",
  },
  {
    cart_img: "https://rsrahaman.github.io/hayRahaman/img/selling.png",
    cart_heading: "E-commerce Store",
    cart_paragraph:
      "Creating online stores where users can browse products, add items to their cart, make purchases, and manage their orders.",
  },
  {
    cart_img: "https://i.postimg.cc/HxWxCMKY/e-learning.png",
    cart_heading: "E-learning platforms",
    cart_paragraph:
      "I build e-learning platforms with features like course management, video lessons, quizzes and student progress tracking.",
  },

  {
    cart_img: "https://i.postimg.cc/RZgRJpYc/project-menegment.png",
    cart_heading: "Project management tools",
    cart_paragraph:
      "the website build collaborative project management tools where users can create projects, assign tasks, track progress, and collaborate with team members.",
  },
  {
    cart_img: "https://i.postimg.cc/WzYXFP6J/r.png",
    cart_heading: "Booking and reservation systems",
    cart_paragraph:
      "You can develop platforms for booking appointments, hotel reservations, event registrations, or any other kind of scheduling application.",
  },

  {
    cart_img: "https://i.postimg.cc/sDdGxTMx/travel.png",
    cart_heading: "Travel and tourism website",
    cart_paragraph:
      "I build platforms for booking flights, hotels, car rentals, and exploring travel destinations website.",
  },
  {
    cart_img: "https://i.postimg.cc/XJPFs3Nk/food.png",
    cart_heading: "Food delivery and restaurant reservation",
    cart_paragraph:
      "Develop a website for ordering food online or reserving tables at restaurants.",
  },
  {
    cart_img: "https://i.postimg.cc/Bn6CBq0t/helth.png",
    cart_heading: "Health and fitness Website",
    cart_paragraph:
      "I Create platforms for tracking fitness activities, setting health goals, and providing personalized workout plans.",
  },
  {
    cart_img: "https://i.postimg.cc/SRkXpXBy/video.png",
    cart_heading: "Music and video streaming services",
    cart_paragraph:
      "I build platforms where users can stream and share music or videos like YouTube.",
  },
  {
    cart_img: "https://i.postimg.cc/J4rBVPtk/news.png",
    cart_heading: "News and media websites",
    cart_paragraph:
      "I Create platforms for publishing news articles, Event, Live video, videos, and multimedia content.",
  },
  {
    cart_img: "https://i.postimg.cc/Z5bws1Gv/job.png",
    cart_heading: "Job portals and freelance marketplaces",
    cart_paragraph:
      "I build job portals where employers can post, and candidates can apply for jobs. It can also be used for freelance connecting clients and freelancers.",
  },
  {
    cart_img: "https://i.postimg.cc/gkLfVwCt/convert.png",
    cart_heading: "Conversion PSD/XD/Figma",
    cart_paragraph: "I convert PST/XD/Figma to MERN Stack on or HTML template",
  },
];

const Services = () => {
  return (
    <>
      <ServicesBanner />
      <div className="services-container">
        <div className="services">
          {cartItems &&
            cartItems.map((item, idx) => (
              <div className="services_cart" key={idx}>
                <img
                  src={item?.cart_img}
                  alt="landing-page"
                  className="cart_img"
                  width="100px"
                />

                <h2 className="cart_heading">{item?.cart_heading}</h2>
                <p className="cart_para">{item?.cart_paragraph}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
