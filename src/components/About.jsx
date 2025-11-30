import React from "react";
import img2 from "../assests/Saly-10.png";
import { FaLaptopCode, FaServer, FaMobile, FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

function About() {
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "2+ Years Experience",
      description: "Building production-ready applications"
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description: "Always exploring new technologies"
    },
    {
      icon: <FaHeart />,
      title: "Passion Driven",
      description: "Love for clean, efficient code"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Discover who I am, my journey, and what drives my passion for development
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-background"></div>
              <img className="about_img" src={img2} alt="About Mohd Adil" />
              <div className="image-dots"></div>
              
              <div className="experience-badge">
                <span className="exp-number">2+</span>
                <span className="exp-text">Years of<br/>Experience</span>
              </div>
            </div>
            
            <div className="quick-stats">
              {experiences.map((exp, index) => (
                <div key={index} className="quick-stat-item">
                  <div className="stat-icon">{exp.icon}</div>
                  <div className="stat-info">
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-text">
            <div className="about-intro">
              <h3>
                A Passionate Full-Stack Developer 
                <span className="highlight">Based in India</span>
              </h3>
              <p id="user-detail-intro" className="my-details">
                With over <strong>2 years of professional experience</strong>, I specialize in crafting 
                modern, scalable web applications that solve real-world problems. My journey began 
                with curiosity about how things work on the web, and has evolved into a deep passion 
                for creating impactful digital solutions.
              </p>
            </div>
            
            <div className="mern-stack-highlight">
              <h4>My Core Stack</h4>
              <div className="stack-icons">
                <div className="stack-item">
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>
                <div className="stack-item">
                  <SiExpress />
                  <span>Express</span>
                </div>
                <div className="stack-item">
                  <SiReact />
                  <span>React</span>
                </div>
                <div className="stack-item">
                  <SiNodedotjs />
                  <span>Node.js</span>
                </div>
              </div>
            </div>
            
            <div className="about-skills-overview">
              <div className="skill-category">
                <div className="skill-icon">
                  <FaLaptopCode />
                </div>
                <div className="skill-info">
                  <h4>Frontend Excellence</h4>
                  <p>React, TypeScript, Next.js, Tailwind CSS, Redux</p>
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-icon">
                  <FaServer />
                </div>
                <div className="skill-info">
                  <h4>Backend Mastery</h4>
                  <p>Node.js, Express.js, MongoDB, REST APIs, PostgreSQL</p>
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-icon">
                  <FaMobile />
                </div>
                <div className="skill-info">
                  <h4>Modern Practices</h4>
                  <p>Git, CI/CD, Agile, Responsive Design, Performance</p>
                </div>
              </div>
            </div>
            
            <div className="about-description">
              <p>
                I believe in writing <strong>clean, maintainable code</strong> that not only works 
                but is a joy to work with. From architecting database schemas to crafting pixel-perfect 
                UIs, I take pride in every aspect of the development process.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
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
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
