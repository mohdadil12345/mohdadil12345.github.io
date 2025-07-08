import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goTo = (activeurl) => {
    if (activeurl) {
      setCurrentPath(activeurl);
    }
    closeMenu();
  };

  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing",
      "_blank"
    );
    closeMenu();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Update current path on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="navbar" id="nav-menu">
      <div>
        <h1>ADIL</h1>
      </div>
      
      <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </button>

      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a 
          onClick={() => goTo('#home')} 
          className={`nav-link home ${currentPath === "#home" || currentPath === "" ? "link-active" : ""}`} 
          href="#home"
        >
          Home
        </a>
        <a 
          onClick={() => goTo('#about')} 
          className={`nav-link about ${currentPath === "#about" ? "link-active" : ""}`} 
          href="#about"
        >
          About
        </a>
        <a 
          onClick={() => goTo('#skills')} 
          className={`nav-link skills ${currentPath === "#skills" ? "link-active" : ""}`} 
          href="#skills"
        >
          Skills
        </a>
        <a 
          onClick={() => goTo('#projects')} 
          className={`nav-link projects ${currentPath === "#projects" ? "link-active" : ""}`} 
          href="#projects"
        >
          Projects
        </a>
        <a 
          onClick={() => goTo('#contact')} 
          className={`nav-link contact ${currentPath === "#contact" ? "link-active" : ""}`} 
          href="#contact"
        >
          Contact
        </a>
        <ThemeToggle />
        <Link 
          className="nav-link resume"  
          onClick={() => goTo(false)} 
          to="https://drive.google.com/uc?export=download&id=1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8"
        >
          <button
            id="resume-button-1" 
            onClick={resumedown}
          >
            Resume
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
