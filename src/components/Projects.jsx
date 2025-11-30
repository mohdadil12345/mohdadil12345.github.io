import React, { useState } from "react";
import sastasafar from "../assests/sastasafar.png";
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

import { FaCss3Alt, FaJsSquare, FaHtml5, FaExternalLinkAlt, FaGithub, FaNodeJs, FaSass } from "react-icons/fa";
import { FaReact, FaAngular } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

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
    highlights: ["Real-time Orders", "User Auth", "Payment Integration"]
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
    highlights: ["Interactive UI", "Booking System", "Responsive Design"]
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
    highlights: ["Product Catalog", "Cart System", "Filters"]
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
    highlights: ["Search & Filter", "Booking Flow", "Gallery"]
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
    highlights: ["Product Listings", "Categories", "Search"]
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
    highlights: ["CRUD Operations", "Local Storage", "TypeScript"]
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  const categories = ["all", "Full Stack", "Web Application", "E-commerce"];

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
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured" style={{ '--delay': `${index * 0.2}s` }}>
              <div className="project-images">
                <div className="project-image main">
                  <img src={project.img1} alt={project.title} />
                </div>
                <div className="project-image secondary">
                  <img src={project.img2} alt={project.title} />
                </div>
                <div className="project-image-overlay"></div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                )}
                
                <div className="project-tech-stack">
                  <h4>Built With</h4>
                  <div className="tech-stack-grid">
                    {project.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skills-card">
                        <div className="skills-card-img">{skill.icon}</div>
                        <span className="skills-card-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a
                    className="project-github-link"
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    className="project-deployed-link"
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="other-projects">
          <h3 className="subsection-title">Other Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card compact" style={{ '--delay': `${index * 0.15}s` }}>
                <div className="project-image">
                  <img src={project.img1} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        className="project-github-link"
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </a>
                      <a
                        className="project-deployed-link"
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-tag">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/mohdadil12345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
