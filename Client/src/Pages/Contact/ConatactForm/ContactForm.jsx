import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="containerf">
      <div className="inputFields ">
        <div className="inputFields-container">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="ContactFormName" />
        </div>
        <div className="inputFields-container">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" className="ContactFormTwoPhone" />
        </div>
        <div className="inputFields-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="ContactFormTwoMail" />
        </div>
      </div>

      <div className="messageTow">
        <label htmlFor="message" className="input__label">
          Message
        </label>
        <input
          type="text"
          id="message"
          className="ContactFormTwoMessage input__field"
        />
      </div>
      <div className="btn-container">
        <button className="btn">Send</button>
      </div>
    </div>
  );
};

export default ContactForm;
