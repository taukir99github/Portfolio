import React from "react";
import "./Home.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Taukir from "../images/Taukir.jpg";
import About from "./About";
import Services from "./Services";
import Porfolio from "./Porfolio";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-left-side">
          <h3>Hello,it's Me</h3>
          <h1>Md Taukir</h1>
          <h3 style={{ fontSize: "1.5rem" }}>
            <marquee>
              And i'm a{" "}
              <span style={{ color: "aqua" }}>Fronted Developer!!</span>
            </marquee>
          </h3>
          <p style={{ fontSize: "1rem" }}>
            A Front-End Developer is responsible for developing new user-facing
            features, determining the structure and design of web pages,
            building reusable codes, optimizing page loading times, and using a
            variety of markup languages to create the web pages
          </p>
          <div className="icons">
           <a href="https://www.facebook.com/profile.php?id=100008176398325" target="_blank"><FaFacebook className="icon" /></a>
            <a href="https://twitter.com/MdTauki72542506" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://github.com/taukir99github" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-taukir-992191102"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
            </a>
          </div>
          <a
            href={require("../file/TaukirResume.pdf")}
            download="TaukirResume"
            style={{ textDecoration: "none" }}
          >
            <div className="home-btn">Download CV</div>
          </a>
        </div>
        <div className="home-right-side"></div>
      </div>
      <About/>
      <Services/>
      <Porfolio/>
      <Skills/>
      <Contact/>
    </>
  );
};

export default Home;
