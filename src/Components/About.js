import React from "react";
import "./About.css";
import Taukir from "../images/Taukir.jpg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="About">
        <div className=" About-upper-sec">
          <h1>About Me</h1>
          <p>My Introduction</p>
        </div>
        <div className="About-lowwer-sec">
          <div className="About-lower-sec-left">
            <img src={Taukir} />
          </div>
          <div className="About-lower-sec-right">
            <div className="card-row">
              <div className="card">
                <HiOutlineAcademicCap />
                <p style={{ fontWeight: "bold" ,cursor:"pointer"}}>Academic</p>
                <p>B.E - 7.5(Upto 7th semester)</p>
              </div>
              <div className="card">
                <FiBriefcase />
                <p style={{ fontWeight: "bold",cursor:"pointer" }}>Completed</p>
                <p>5+ projects</p>
              </div>
              <div className="card">
                <BiSupport />
                <p style={{ fontWeight: "bold",cursor:"pointer" }}>Support</p>
                <p>online 24/7</p>
              </div>
            </div>
            <p style={{marginTop: "3rem", fontSize: "1.4rem", marginBottom:"2rem"}}>Frontend Developer, I create web pages with UI / UX user interface using React.js. I have completed several projects during by B.E Journey.</p>
            <div className='home-btn'>
                Download CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
