import React from 'react'
import "./Library.css";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Library = ({closeLibrary}) => {
  return (
    <>
  <div className="p_wrapper" onClick={closeLibrary}></div>
      <div className="p_container">
        <AiOutlineClose
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={closeLibrary}
        />
        <h1>Library</h1>
        
        <div className="p_content"  >
            <div className='left-content'>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Reactjs
          </p>
          <p>
            <BsCheckCircle />
            &nbsp; &nbsp;Jquery
          </p>
         
          </div>
        </div>
      </div>
    </>
  )
}


export default Library;