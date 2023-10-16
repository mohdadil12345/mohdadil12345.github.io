import React from 'react'
import AllRoutes from './AllRoutes'
import { Link } from 'react-router-dom';

function Navbar() {
   // "https://drive.google.com/file/d/1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc/view?usp=sharing",
          // "_blank"

  const resumedown = () => {
        window.open(
          "https://drive.google.com/file/d/1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG/view?usp=sharing",
          "_blank"
          
        );
      };
     

  return (
    <div className='navbar'  id="nav-menu">
      <div>

      <h1>ADIL</h1>
      </div>
      <div className="links">
        <a className='nav-link home' href="#home">Home</a>
        <a className='nav-link about' href="#about">About</a>
        <a className='nav-link skills' href="#skills">Skills</a>
        <a className='nav-link projects' href="#projects">Projects</a>
        <a className='nav-link contact' href="#contact">Contact</a>
        {/* <a  className='nav-link resume' id='resume-button-1' href="#resume">Resume</a> */}
        <Link
             className="nav-link resume"
             to="https://drive.google.com/uc?export=download&id=1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG"
           >
             <button
               id="resume-button-1"
               style={{
                 background: "none",
                 border: "none",
                 fontWeight: "bold",
                 fontSize: "16px",
               }}
               onClick={resumedown}
             >
               <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
               Resume
              
             </button>
           </Link> 


      </div>


    </div>
  )
}

export default Navbar

