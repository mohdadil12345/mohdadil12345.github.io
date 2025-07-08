import React from "react";
import img1 from "../assests/Saly-16.png";
import img2 from "../assests/Saly-10.png";
import { FaCode, FaLaptopCode, FaServer, FaMobile } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img className="about_img" src={img2} alt="About Mohd Adil" />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="about-intro">
              <h3>I'm a passionate Full-Stack Developer</h3>
              <p id="user-detail-intro" className="my-details">
                Based in India with over a year of professional experience in building modern, 
                scalable web applications. My journey in web development has been driven by 
                curiosity and a genuine love for creating digital solutions that make a difference.
              </p>
            </div>
            
            <div className="about-skills-overview">
              <div className="skill-category">
                <div className="skill-icon">
                  <FaLaptopCode />
                </div>
                <div className="skill-info">
                  <h4>Frontend Development</h4>
                  <p>React, JavaScript, HTML5, CSS3, SASS</p>
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-icon">
                  <FaServer />
                </div>
                <div className="skill-info">
                  <h4>Backend Development</h4>
                  <p>Node.js, Express.js, MongoDB, APIs</p>
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-icon">
                  <FaMobile />
                </div>
                <div className="skill-info">
                  <h4>UI/UX Design</h4>
                  <p>Figma, Responsive Design, User Experience</p>
                </div>
              </div>
            </div>
            
            <div className="about-description">
              <p>
                I specialize in the <strong>MERN stack</strong> and have hands-on experience 
                with modern JavaScript frameworks. From crafting responsive user interfaces 
                to building robust backend APIs, I enjoy every aspect of the development process.
              </p>
              
              <p>
                What drives me is the opportunity to solve real-world problems through code. 
                I'm constantly learning new technologies and best practices to stay current 
                with the ever-evolving web development landscape.
              </p>
            </div>
            
            <div className="about-cta">
              <button 
                className="btn btn-outline"
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View My Work
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


