import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="header-left-side"> <h3>Portfolio</h3></div>
          <div className="header-right-side">
           <Link to="/"><div className='header-link' style={{color:"aqua"}}>Home</div></Link>
           <Link to="About"> <div className='header-link'>About</div></Link>
           <Link to="Services"><div className='header-link'>Services</div></Link>
           <Link to="Porfolio"><div className='header-link'>Project</div></Link>
           <Link to="Skills"><div className='header-link'>Skills</div></Link>
           <Link to="Contact"><div className='header-link'>Contact</div></Link>
           
         
          </div>
        </div>
      </div>
        


    </>
  );
}

export default Header;