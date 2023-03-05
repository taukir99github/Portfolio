import React from 'react'
import "./Final.css";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function Final({ closeFinal }) {
  return (
    <>
      <div className="Rms_wrapper" onClick={closeFinal}></div>
      <div className="Rms_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeFinal}
        />
        <h1>Placement Management Prediction And Recommdation System</h1>
        <br />
        <p className="Top">
          {" "}
          Event management is the application of project management to the creation and development of small and or large scale personal or corporate events such as ceremonies, weddings.
        </p>
        <div className="Rms_content">
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Fronted:Reactjs
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Backend: Spring Tool suit (java)
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; DataBase: Mysql
          </p>
        </div>
      </div>
          
    </>
  );
}