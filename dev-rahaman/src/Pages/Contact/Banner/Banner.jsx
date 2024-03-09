import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="contact-banner-container">
      <div className="left">
        <div className="card1">
          <div className="icon-container">
            <div className="icon">📱</div>
          </div>
          <div className="content1">
            <div className="title1">Phone</div>
            <div className="phone">
              <a href="tel:+01601313258">01601313258</a>
            </div>
            <div className="phone">
              <a href="tel:+01619512068">01619512068</a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="icon-container">
            <div className="icon">📱</div>
          </div>
          <div className="content1">
            <div className="title1">Email</div>
            <div className="phone">
              <a href="mailto:rsabdurrahamansultany2@gamil.com">
                rsabdurrahamansultany2@gamil.com
              </a>
            </div>
            <div className="phone">
              <a href="mailto:rsabdurrahamansultany3@gamil.com">
                rsabdurrahamansultany3@gamil.com
              </a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="icon-container">
            <div className="icon">📱</div>
          </div>
          <div className="content1">
            <div className="title1">Live Chat</div>
            <div className="phone">WhatsApp: 01601313258</div>
            <div className="phone">IMO: 01601313258</div>
            <div className="phone">
              <a
                href="https://www.facebook.com/messages/t/100080369473890"
                target="blank"
              >
                Messenger: Abdur Rahaman Sultany
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/devRahamanSmile.jpg" alt="" className="devRahamanSmile" />
      </div>
    </div>
  );
}

export default Banner;
