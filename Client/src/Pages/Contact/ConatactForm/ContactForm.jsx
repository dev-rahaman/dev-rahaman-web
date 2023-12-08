import React, { useState } from "react";
import contact2 from "../../../../public/abdur-rahaman-sultnay-contact-2.svg";

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
    <div className="contact-me-container-two">
      <div className="contact-me-container-right">
        <img src={contact2} alt="" className="big-image2" />
      </div>
      <div className="contact-me-container-left">
        <form className="contact-form" onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;
