import React from "react";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaRocket } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";

function Home() {
  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for new opportunities</span>
          </div>
          
          <div className="hero-greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 id="user-detail-name" className="hero-name">
            <span className="name-line">Mohd</span>
            <span className="name-line accent">Adil</span>
          </h1>
          
          <h2 className="hero-title">
            <span className="title-static">Full Stack</span>
            <span className="title-animated">Developer</span>
          </h2>
          
          <p className="hero-description">
            Crafting exceptional digital experiences with <strong>2+ years</strong> of expertise 
            in building scalable web applications. I transform complex ideas into elegant, 
            user-centric solutions that make an impact.
          </p>
          
          <div className="tech-stack-preview">
            <span className="tech-label">Tech Stack</span>
            <div className="tech-icons">
              <div className="tech-icon" title="React">
                <SiReact />
              </div>
              <div className="tech-icon" title="Node.js">
                <SiNodedotjs />
              </div>
              <div className="tech-icon" title="MongoDB">
                <SiMongodb />
              </div>
              <div className="tech-icon" title="TypeScript">
                <SiTypescript />
              </div>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
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
                <FaRocket />
                <span>Download CV</span>
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
              <FaCode />
              <span>Let's Connect</span>
            </button>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/mohdadil12345" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohdadil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/mohdadil" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:mohdadil@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <div className="image-glow"></div>
            <img className="home-img" src={myimg1} alt="Mohd Adil - Full Stack Developer" />
            <div className="image-ring"></div>
            <div className="image-ring ring-2"></div>
          </div>
          
          <div className="floating-card card-experience">
            <div className="card-icon">
              <FaCode />
            </div>
            <div className="card-content">
              <span className="card-number">2+</span>
              <span className="card-text">Years Coding</span>
            </div>
          </div>
          
          <div className="floating-card card-status">
            <div className="status-dot"></div>
            <span>Open to Work</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Home;
