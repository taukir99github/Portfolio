import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="service">
        <div className="service-upper-sec">
          <div className="service-header">
            <h1>Our</h1>
            <h1 style={{ color: "aqua" }}>Services</h1>
          </div>
        </div>
        <div className="service-lower-sec">
          <div className="service-card">
            <h1>Web Development</h1>
            <p>
            A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. 
            </p>
            <div className="service-btn">Read More</div>
          </div>
          <div className="service-card">
            <h1>Java Developer</h1>
            <p>
            Responsible for developing applications and software using the Java programming language, these specialized programmers collaborate with fellow software engineers, web developers, and others to use Java for developing business applications, websites and more.
            </p>
            <div className="service-btn">Read More</div>
          </div>
          <div className="service-card">
            <h1>Full Stack developer</h1>
            <p>
            A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.
            </p>
            <div className="service-btn">Read More</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
