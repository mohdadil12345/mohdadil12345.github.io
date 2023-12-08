import React, { useState } from "react";
import AllRoutes from "./AllRoutes";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [show, setshow] = useState(true);
  const [display, sedisplay] = useState(true)
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  const toggle = () => {
    setshow(!show);
    sedisplay(!display)
  };

  const goTo = (activeurl) => {
    if (activeurl) {
      setCurrentPath(activeurl)
    }
    setshow(true);
    sedisplay(true)
  };

  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1ReFqsWgVN0pAGI_713PuPcHFxWjyJQmX/view?usp=sharing",
      "_blank"
    )
    // https://drive.google.com/file/d/1ReFqsWgVN0pAGI_713PuPcHFxWjyJQmX/view?usp=drive_link
  };

  return (
    <div className="navbar" id="nav-menu">
      <div>
        <h1>ADIL</h1>
      </div>
      <button className="menu-btn" onClick={toggle}>
        {show ? <MdMenu/> : <FaXmark/>}
      </button>

      <div className="links" id={display ? "close" : "open"}>
        <a onClick={()=>goTo('#home')} className={`nav-link home ${currentPath == "#home" ? "link-active" : ""}`} href="#home">
          Home
        </a>
        <a onClick={()=>goTo('#about')} className={`nav-link about ${currentPath == "#about" ? "link-active" : ""}`} href="#about">
          About
        </a>
        <a onClick={()=>goTo('#skills')} className={`nav-link skills ${currentPath == "#skills" ? "link-active" : ""}`} href="#skills">
          Skills
        </a>
        <a onClick={()=>goTo('#projects')} className={`nav-link projects ${currentPath == "#projects" ? "link-active" : ""}`} href="#projects">
          Projects
        </a>
        <a onClick={()=>goTo('#contact')} className={`nav-link contact ${currentPath == "#contact" ? "link-active" : ""}`} href="#contact">
          Contact
        </a>
        {/* <a  className='nav-link resume' id='resume-button-1' href="#resume">Resume</a> */}
        <Link className="nav-link resume"  onClick={()=>goTo(false)} 
          
          to="https://drive.google.com/uc?export=download&id=1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG"
        >
          <button
            id="resume-button-1"
      
            onClick={resumedown}
          >
            <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
