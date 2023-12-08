import React from "react";
import ContactFormPage from "./ConatactForm/ContactFormPage";
import Middle from "./ConatactForm/middle";
import ContactFormTwo from "./ConatactFormTwo/ContactFormTwo";

const Contact = () => {
  return (
    <>
      <ContactFormPage />
      <Middle />

      <ContactFormTwo />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.297073729153!2d91.25961567380303!3d23.41363347890161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375381a52f096163%3A0x473c4efd418d3da7!2sKanesh%20Tala%20High%20School!5e0!3m2!1sen!2sbd!4v1688211867283!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: "0", marginTop: "50px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
