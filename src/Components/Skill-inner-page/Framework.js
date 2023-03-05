import React from 'react'
import "./Framework.css";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Framework = ({closeFramework}) => {
  return (
    <>
  <div className="p_wrapper" onClick={closeFramework}></div>
      <div className="p_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeFramework}
        />
        <h1>Framework</h1>
        
        <div className="p_content"  >
            <div className='left-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Bootstrap
          </p>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Framework;