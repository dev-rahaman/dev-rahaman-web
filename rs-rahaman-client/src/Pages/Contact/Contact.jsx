import React from "react";
import Cart from "../../Components/Cart/Cart";
import ContactForm from "../../Components/ConatactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Cart></Cart>
      </div>
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
