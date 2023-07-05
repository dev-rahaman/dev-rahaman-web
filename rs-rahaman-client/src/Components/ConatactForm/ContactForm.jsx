import React, { useState } from "react";
import "./ContactFrom.css";

import phone from "../../../public/phone.png";
import emailImg from "../../../public/email.png";
import contact1 from "../../../public/abndur-rahaman-sultnay-web developer-MERN Stack developer, React Developer, JavaSript Develper, MongDB developer.jpg";
import liveChat from "../../../public/abdur-rahaman-sultnay-live-chat.png";
import contact2 from "../../../public/abdur-rahaman-sultnay-contact-2.svg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div>
      {/* top  */}
      <div className="contact-me-container">
        <div className="contact-me-container-left">
          <div className="landscape-cart">
            <div className="image-container">
              <img src={phone} alt="phone" className="image-container-fist" />
            </div>
            <div className="content-container">
              <h2>Phone</h2>
              <a href="tel:01601313258">01601313258</a>
              <br />
              <a href="tel:01601313258">01601313258</a>
            </div>
          </div>
          <div className="landscape-cart">
            <div className="image-container">
              <img src={emailImg} alt="email" />
            </div>
            <div className="content-container">
              <h2>Email</h2>
              <a href="mailto:rsabdurrahamansultany3@gamil.com">
                rsabdurrahamansultany2@gamil.com
              </a>
              <br />
              <a href="mailto:rsabdurrahamansultany3@gamil.com">
                rsabdurrahamansultany3@gamil.com
              </a>
            </div>
          </div>
          <div className="landscape-cart">
            <div className="image-container">
              <img
                src={liveChat}
                alt="phone"
                className="image-container-last"
              />
            </div>
            <div className="content-container">
              <h2>Live Chat</h2>
              <p>
                <span>WhatsApp:</span> 01601313258
              </p>
              <p style={{ margin: "10px 0" }}>
                <span>IMO:</span> <a href="tel:01601313258">01601313258</a>
              </p>
              <span>Messenger: </span>
              <a
                href="https://www.facebook.com/messages/t/100080369473890"
                target="blank"
              >
                Abdur Rahaman Sultany
              </a>
            </div>
          </div>
        </div>
        <div className="contact-me-container-right">
          <img src={contact1} alt="" className="big-image" />
        </div>
      </div>

      {/* bottom */}
      <div className="contact-me-container-two">
        <div className="contact-me-container-right">
          <img src={contact2} alt="" className="big-image2" />
        </div>
        <div className="contact-me-container-left">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="contact-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.297073729153!2d91.25961567380303!3d23.41363347890161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375381a52f096163%3A0x473c4efd418d3da7!2sKanesh%20Tala%20High%20School!5e0!3m2!1sen!2sbd!4v1688211867283!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: "0", marginTop: "50px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactForm;
