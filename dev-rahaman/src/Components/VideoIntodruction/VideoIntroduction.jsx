import React, { useEffect, useState, useRef } from "react";
import "./VideoIntroduction.css";
import { IoClose } from "react-icons/io5";

export default function VideoIntroduction() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const body = document.body;
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalIsOpen) {
      body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="modal-container">
      <button onClick={openModal} className="btn open-modal">
        Watch Video
      </button>
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" ref={modalRef}>
            <iframe
              title="Introduction Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p onClick={closeModal} className="close-btn">
              <IoClose />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
