import React from "react";
import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";

function Home() {
  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home">
      <div className="my-info">
        <h2>Hey there! 👋</h2>
        <h1 id="user-detail-name">I'm Mohd Adil</h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)', 
          marginBottom: 'var(--space-lg)',
          maxWidth: '500px',
          lineHeight: 1.6
        }}>
          A passionate <strong style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</strong> with 1+ year of experience crafting modern web applications. I specialize in React, Node.js, and creating seamless user experiences.
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1W2lUx0ty6bVhrldi1DYSFVTylpIIRZb8"
          >
            <button
              id="resume-button-2"
              onClick={resumedown2}
            >
              Download Resume
            </button>
          </Link>
          
          <button
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            style={{
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '2px solid var(--accent-primary)',
              padding: 'var(--space-md) var(--space-2xl)',
              borderRadius: 'var(--radius-lg)',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--accent-primary)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View Projects
          </button>
        </div>
      </div>
      
      <div>
        <img className="home-img" src={myimg1} alt="Mohd Adil - Full Stack Developer" />
      </div>
    </section>
  );
}

export default Home;
