import React from "react";
import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Home() {
  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          <h1 id="user-detail-name" className="hero-name">
            Mohd Adil
          </h1>
          <h2 className="hero-title">
            Full Stack Developer
          </h2>
          <p className="hero-description">
            I build exceptional digital experiences that live on the web. 
            Passionate about creating seamless user interfaces and robust backend systems.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Year Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <Link
              className="nav-link resume"
              to="https://drive.google.com/uc?export=download&id=1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8"
            >
              <button
                id="resume-button-2"
                className="btn btn-primary"
                onClick={resumedown2}
              >
                Download CV
              </button>
            </Link>
            
            <button
              className="btn btn-secondary"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get In Touch
            </button>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/mohdadil12345" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohdadil" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/mohdadil" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:mohdadil@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <img className="home-img" src={myimg1} alt="Mohd Adil - Full Stack Developer" />
            <div className="image-backdrop"></div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <div className="status-dot"></div>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Home;
