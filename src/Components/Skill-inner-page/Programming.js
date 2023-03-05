import React from 'react'
import "./Programming.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Programming = ({closeProgramming}) => {
  return (
    <>
  <div className="p_wrapper" onClick={closeProgramming}></div>
      <div className="p_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeProgramming}
        />
        <h1>Programming Languages</h1>
        
        <div className="p_content"  >
            <div className='left-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Java
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; C
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Python
          </p>
          </div>
          <div className='right-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Javascript
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Html
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp; Css
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programming