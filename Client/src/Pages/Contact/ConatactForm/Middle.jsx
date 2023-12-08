import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Middle = () => {
  return (
    <>
      <div className="middle">
        <span>
          Phone: <Link to={"tel:" + "01601313258"}>{"01601313258"}</Link>
        </span>
        <span className="cart-email">
          Email:
          <Link to={"mailto:" + " rsabdurrahamansultany2@gmail.com"}>
            {" "}
            rsabdurrahamansultany2@gmail.com
          </Link>
        </span>
        <div className="social-container">
          <Link
            to={"https://www.linkedin.com/in/abdurrahamansultany/"}
            target="_blank"
          >
            <span className="social">
              <FaLinkedin />
            </span>
          </Link>
          <Link to={"https://www.facebook.com/rahamandev"} target="_blank">
            <span className="social">
              <FaFacebook />
            </span>
          </Link>
          <Link to={"https://www.instagram.com/dev_rahaman/"} target="_blank">
            <span className="social">
              <FaInstagram />
            </span>
          </Link>
          <Link to={"https://twitter.com/dev_rahaman"} target="_blank">
            <span className="social">
              <FaTwitter />
            </span>
          </Link>
          <Link to={"https://www.pinterest.com/devrahaman/"} target="_blank">
            <span className="social">
              <FaPinterest />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Middle;
