import React, { useState } from "react";
import abc from "../assests/abc.png";
import abc2 from "../assests/grasmbile.png";
import oddgrass from "../assests/odd grass.png";
import dressify from "../assests/dressify.png";
import oddgras from "../assests/oddgrass-2.png";
import olx from "../assests/olx-2.png";
import olxx from "../assests/olxx.png";
import iph from "../assests/iPhone 13f.png";
import homechef from "../assests/homechef-1.png";
import homechef2 from "../assests/homechef-2.png";
import todo1 from "../assests/todo-1.png";
import todo2 from "../assests/todo-2.png";

import { FaCss3Alt, FaJsSquare, FaHtml5, FaExternalLinkAlt, FaGithub, FaNodeJs, FaSass, FaArrowRight } from "react-icons/fa";
import { FaReact, FaAngular } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

let projects = [
  {
    title: "Home Chef",
    img1: homechef,
    img2: homechef2,
    category: "Full Stack",
    description: "A comprehensive food delivery platform with recipe discovery, meal planning, and seamless ordering. Built with MERN stack featuring real-time updates and intuitive UX.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    git: "https://github.com/mohdadil12345/Home_Chef",
    preview: "https://home-chef-neon.vercel.app/",
    featured: true,
    highlights: ["Real-time Orders", "User Auth", "Payment Integration"],
    color: "#f97316"
  },
  {
    title: "Sasta Safar",
    img1: abc,
    img2: iph,
    category: "Web Application",
    description: "An ecotourism platform that empowers users to explore and book travel destinations. Features interactive maps, destination selection, and seamless booking flow.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/mymsa123/quixotic-snail-9802",
    preview: "https://glittery-elf-a56a10.netlify.app/",
    featured: true,
    highlights: ["Interactive UI", "Booking System", "Responsive Design"],
    color: "#10b981"
  },
  {
    title: "Dressify",
    img1: dressify,
    img2: abc2,
    category: "E-commerce",
    description: "Modern fashion e-commerce platform with product catalog, cart management, and checkout flow. Responsive design optimized for mobile shopping.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-eight.vercel.app/",
    featured: false,
    highlights: ["Product Catalog", "Cart System", "Filters"],
    color: "#8b5cf6"
  },
  {
    title: "Ecotourism Platform",
    img1: oddgrass,
    img2: oddgras,
    category: "Web Application",
    description: "Travel booking platform with destination exploration, hotel booking, and activity planning. Clean UI/UX for seamless travel experience.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/harsh7739/odd-grass-4307",
    preview: "https://resonant-meringue-f6cdea.netlify.app/",
    featured: false,
    highlights: ["Search & Filter", "Booking Flow", "Gallery"],
    color: "#06b6d4"
  },
  {
    title: "OLX Clone",
    img1: olxx,
    img2: olx,
    category: "Web Application",
    description: "Marketplace clone with product listing, category browsing, and user-friendly interface for buying and selling items.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/mohdadil12345/gamy-part-5391",
    preview: "https://darling-souffle-a3c765.netlify.app/",
    featured: false,
    highlights: ["Product Listings", "Categories", "Search"],
    color: "#ec4899"
  },
  {
    title: "Todo Application",
    img1: todo1,
    img2: todo2,
    category: "Web Application",
    description: "Feature-rich todo application with CRUD operations, local storage persistence, and modern Angular architecture. Built with TypeScript for type safety.",
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "SASS", icon: <FaSass /> },
    ],
    git: "https://github.com/mohdadil12345/TODO_APP",
    preview: "https://todo-application-pied-phi.vercel.app/todo",
    featured: false,
    highlights: ["CRUD Operations", "Local Storage", "TypeScript"],
    color: "#ef4444"
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my skills and experience over 2+ years
          </p>
        </div>
        
        {/* Featured Projects - New Showcase Design */}
        <div className="featured-showcase">
          {/* Project Navigation Tabs */}
          <div className="project-tabs">
            {featuredProjects.map((project, index) => (
              <button
                key={index}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                style={{ '--accent-color': project.color }}
              >
                <span className="tab-number">0{index + 1}</span>
                <span className="tab-title">{project.title}</span>
                <span className="tab-category">{project.category}</span>
              </button>
            ))}
          </div>
          
          {/* Active Project Display */}
          <div className="project-display">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`project-showcase ${activeProject === index ? 'active' : ''}`}
                style={{ '--accent-color': project.color }}
              >
                {/* Image Section */}
                <div className="showcase-images">
                  <div className="image-wrapper">
                    <div className="image-glow" style={{ background: project.color }}></div>
                    <div className="main-image">
                      <img src={project.img1} alt={project.title} />
                    </div>
                    <div className="secondary-image">
                      <img src={project.img2} alt={`${project.title} mobile view`} />
                    </div>
                    <div className="image-decoration">
                      <HiOutlineCode />
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="project-quick-stats">
                    <div className="quick-stat">
                      <span className="stat-value">{project.skills.length}</span>
                      <span className="stat-label">Technologies</span>
                    </div>
                    <div className="quick-stat">
                      <span className="stat-value">{project.highlights.length}</span>
                      <span className="stat-label">Key Features</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="showcase-content">
                  <div className="content-header">
                    <span className="project-number">Project 0{index + 1}</span>
                    <span className="project-category" style={{ background: project.color }}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  {/* Features */}
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {project.highlights.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-dot" style={{ background: project.color }}></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="project-tech">
                    <h4>Built With</h4>
                    <div className="tech-list">
                      {project.skills.map((skill, idx) => (
                        <div key={idx} className="tech-item" style={{ '--accent': project.color }}>
                          <span className="tech-icon">{skill.icon}</span>
                          <span className="tech-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a 
                      href={project.preview} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn primary"
                      style={{ background: project.color }}
                    >
                      <span>View Live Demo</span>
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.git} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn secondary"
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="project-progress">
            {featuredProjects.map((project, index) => (
              <button
                key={index}
                className={`progress-dot ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                style={{ '--accent': project.color }}
                aria-label={`View ${project.title}`}
              />
            ))}
          </div>
        </div>
        
        {/* Other Projects Grid */}
        <div className="other-projects">
          <div className="other-projects-header">
            <h3 className="subsection-title">More Projects</h3>
            <p className="subsection-description">Other notable projects I've worked on</p>
          </div>
          
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div 
                key={index} 
                className="project-card" 
                style={{ '--accent-color': project.color, '--delay': `${index * 0.1}s` }}
              >
                <div className="card-image">
                  <img src={project.img1} alt={project.title} />
                  <div className="card-overlay">
                    <a 
                      href={project.preview} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.git} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                
                <div className="card-content">
                  <span className="card-category">{project.category}</span>
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-description">{project.description}</p>
                  
                  <div className="card-tech">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="card-tech-tag">{skill.name}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.preview} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <span>View Project</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="projects-cta">
          <div className="cta-content">
            <h3>Interested in more?</h3>
            <p>Check out my GitHub profile for all my projects and contributions</p>
          </div>
          <a 
            href="https://github.com/mohdadil12345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
