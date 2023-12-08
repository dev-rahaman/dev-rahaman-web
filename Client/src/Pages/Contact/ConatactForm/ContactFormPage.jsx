import React, { useState } from "react";
import "./ContactFrom.css";
import phone from "../../../../public/phone.png";
import emailImg from "../../../../public/email.png";
import contact1 from "../../../../public/abndur-rahaman-sultnay-web developer-MERN Stack developer, React Developer, JavaSript Develper, MongDB developer.jpg";
import liveChat from "../../../../public/abdur-rahaman-sultnay-live-chat.png";

const ContactFormPage = () => {
  return (
    <div>
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
              <a href="tel:01601313258">01619512068</a>
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
    </div>
  );
};

export default ContactFormPage;
