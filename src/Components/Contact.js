import React from "react";
import "./Contact.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Tooltip } from "@mui/material";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <h1 style={{ font_size: "36px" }}>Get In Touch</h1>
          <div className="touch">
            <div className="personal">
              <h5>Email</h5>
              <p>taukir00sms@gmail.com</p>
              </div>
            <div className="personal">
              <h5>Mobile</h5>
              <p>7909058805</p>
              </div>
            <div className="personal">
              <h5>Whatsapp</h5>
              <p>7909058803</p>
              </div>
          </div>
          <div className="social-media">
            <div className="social-icons">
              <Tooltip title=<p>Facebook</p> placement="left" style={{backgroundColor:"#212121"}} arrow>
              <a
                href="https://www.facebook.com/profile.php?id=100008176398325"
                target="_blank"
              >
                <FaFacebook className="icon" />
              </a></Tooltip>

            </div>
            <div className="social-icons">
              <a href="https://twitter.com/MdTauki72542506" target="_blank">
                <AiFillTwitterCircle className="icon" />
              </a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/taukir99github" target="_blank">
                <AiFillGithub className="icon" />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-taukir-992191102"
                target="_blank"
              >
                <AiFillLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-upper-sec">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-right-lower-sec">
            <div className="form">
              <label>Name: </label>
              <input type="text"></input>
              <br></br>
              <br></br>
              <label>Email: </label>
              <input type="email"></input>
              <br></br>
              <br></br>
              <label>Password: </label>
              <input type="password"></input>
              <div className="submit-btn">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
