import React, { useState } from "react";
import "./Skills.css";
import Programming from "./Skill-inner-page/Programming";
import Framework from "./Skill-inner-page/Framework";
import Development from "./Skill-inner-page/Development";
import Other from "./Skill-inner-page/Other";
import Library from "./Skill-inner-page/Library";

import foto1 from "../images/foto1.png";
import foto2 from "../images/foto2.png";
import foto3 from "../images/foto3.png";
import foto4 from "../images/foto4.png";
import foto5 from "../images/foto5.png";

const Skills = () => {
  const [showProgramming, setshowProgramming] = useState(false);
  const closeProgramming = () => setshowProgramming(false);

  const [showFramework, setshowFramework] = useState(false);
  const closeFramework = () => setshowFramework(false);

  const [showLibrary, setshowLibrary] = useState(false);
  const closeLibrary = () => setshowLibrary(false);

  const [showDevelopment, setshowDevelopment] = useState(false);
  const closeDevelopment = () => setshowDevelopment(false);

  const [showOther, setshowOther] = useState(false);
  const closeOther = () => setshowOther(false);

  return (
    <>
      <div className="skills">
        <div className="skills-upper-sec">
          <h1>Skills-Set</h1>
          <div className="line"></div>
        </div>
        <div className="skills-lower-sec">
          <div className="skillscard">
            <div onClick={() => setshowProgramming(true)} className="side1">
              <div className="image" onClick={() => setshowProgramming(true)}>
                <img src={foto1} />
              </div>
              <h3>Programming Languages</h3>
            </div>
            <div onClick={() => setshowFramework(true)} className="side1">
              <div className="image" onClick={() => setshowFramework(true)}>
                <img src={foto2} />
              </div>
              <h3>FrameWork</h3>
            </div>
            <div className="side1" onClick={() => setshowLibrary(true)}>
              <div onClick={() => setshowLibrary(true)} className="image">
                <img src={foto3} />
              </div>
              <h3>Library</h3>
            </div>
          </div>
          <div className="skillscard">
            <div onClick={() => setshowDevelopment(true)} className="side1">
              <div onClick={() => setshowDevelopment(true)} className="image">
                <img src={foto4} />
              </div>
              <h3>Development Tool</h3>
            </div>
            <div onClick={() => setshowOther(true)}className="side1">
              <div onClick={() => setshowOther(true)}className="image">
                <img src={foto5} />
              </div>
              <h3>Others</h3>
            </div>
          </div>
        </div>
        {showProgramming && <Programming closeProgramming={closeProgramming} />}
        {showFramework && <Framework closeFramework={closeFramework} />}
        {showLibrary && <Library closeLibrary={closeLibrary} />}
        {showDevelopment && <Development closeDevelopment={closeDevelopment} />}
        {showOther && <Other closeOther={closeOther} />}
      </div>
    </>
  );
};

export default Skills;
