import React from "react";
import "./Rms.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function Rms({ closeRms }) {
  return (
    <>
      <div className="Rms_wrapper" onClick={closeRms}></div>
      <div className="Rms_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeRms}
        />
        <h1>Result Management System</h1>
        <br />
        <p className="Top">
          {" "}
          The aim of this project is to make a web application which display
          various details with respect to student result. 
        </p>
        <div className="Rms_content">
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Fronted: Html Css Javascript
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Backend: Php
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; DataBase: sql
          </p>
        </div>
      </div>
          
    </>
  );
}
