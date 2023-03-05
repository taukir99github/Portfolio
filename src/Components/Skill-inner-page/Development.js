import React from 'react'
import "./Development.css";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Development= ({closeDevelopment}) => {
  return (
    <>
  <div className="d_wrapper" onClick={closeDevelopment}></div>
      <div className="d_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeDevelopment}
        />
        <h1>Development Tool</h1>
        
        <div className="d_content"  >
            <div className='d_left-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Android studio
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Ubuntu
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Eclipse
          </p>
          </div>
          <div className='d_right-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Visual studio
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;  windows
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Mac
          </p>
          </div>
        </div>
      </div>
    </>
  )
}



export default Development