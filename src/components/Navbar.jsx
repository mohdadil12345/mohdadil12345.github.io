import React from 'react'
import AllRoutes from './AllRoutes'

function Navbar() {
  return (
    <div className='navbar'  id="nav-menu">
      <div>

      <h1>ADIL</h1>
      </div>
      <div className="links">
        <a className='nav-link home' href="#home">Home</a>
        <a className='nav-link about' href="#about">About</a>
        <a className='nav-link skills' href="#skills">Skills</a>
        <a className='nav-link projects' href="#project">Projects</a>
        <a className='nav-link contact' href="#contact">Contact</a>
        <a className='nav-link resume' id='resume-button-1' href="#resume">Resume</a>



      </div>


    </div>
  )
}

export default Navbar