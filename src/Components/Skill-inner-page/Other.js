import React from 'react'
import "./Other.css";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Other = ({closeOther}) => {
  return (
    <>
  <div className="p_wrapper" onClick={closeOther}></div>
      <div className="p_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeOther}
        />
        <h1>Library</h1>
        
        <div className="p_content"  >
            <div className='left-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Data Structure
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;OOPs
          </p>
         
          </div>
        </div>
      </div>
    </>
  )
}


export default Other;
