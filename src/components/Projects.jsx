import React from "react";
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

import { FaCss3Alt, FaJsSquare, FaHtml5, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaSass, FaAngular } from "react-icons/fa6";

let projects = [
  {
    title: "Sasta Safar",
    img1: abc,
    img2: iph,
    category: "Web Application",
    description: "An ecotourism platform that empowers users to explore and book travel destinations. Features destination selection, ticket booking, and user-friendly interface for nature enthusiasts.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/mymsa123/quixotic-snail-9802",
    preview: "https://glittery-elf-a56a10.netlify.app/",
    featured: true
  },
  {
    title: "Home Chef",
    img1: homechef,
    img2: homechef2,
    category: "Full Stack",
    description: "A comprehensive food delivery platform clone with recipe discovery, meal planning, and doorstep delivery. Built with modern web technologies for seamless user experience.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    git: "https://github.com/mohdadil12345/Home_Chef",
    preview: "https://home-chef-neon.vercel.app/",
    featured: true
  },
  {
    title: "Dressify",
    img1: dressify,
    img2: abc2,
    category: "E-commerce",
    description: "Modern fashion e-commerce platform offering clothing for all ages. Features product browsing, cart management, and responsive design for optimal shopping experience.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "SASS", icon: <FaSass /> },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-eight.vercel.app/",
    featured: false
  },
  {
    title: "Ecotourism Platform",
    img1: oddgrass,
    img2: oddgras,
    category: "Web Application",
    description: "Travel booking platform with destination exploration, hotel booking, and activity planning. Simple UI/UX for seamless travel experience.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/harsh7739/odd-grass-4307",
    preview: "https://resonant-meringue-f6cdea.netlify.app/",
    featured: false
  },
  {
    title: "OLX Clone",
    img1: olxx,
    img2: olx,
    category: "Web Application",
    description: "Marketplace clone where users can browse and purchase products. Features product listing, search functionality, and user-friendly interface.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    git: "https://github.com/mohdadil12345/gamy-part-5391",
    preview: "https://darling-souffle-a3c765.netlify.app/",
    featured: false
  },
  {
    title: "Todo Application",
    img1: todo1,
    img2: todo2,
    category: "Web Application",
    description: "Feature-rich todo application with CRUD operations, offline support, and modern Angular architecture. Built with TypeScript for type safety.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "TypeScript", icon: <FaJsSquare /> },
      { name: "Angular", icon: <FaAngular /> },
    ],
    git: "https://github.com/mohdadil12345/TODO_APP",
    preview: "https://todo-application-pied-phi.vercel.app/todo",
    featured: false
  },
];

function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured">
              <div className="project-images">
                <div className="project-image main">
                  <img src={project.img1} alt={project.title} />
                </div>
                <div className="project-image secondary">
                  <img src={project.img2} alt={project.title} />
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  <h4>Technologies Used</h4>
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
                    <span>View Code</span>
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
              <div key={index} className="project-card compact">
                <div className="project-image">
                  <img src={project.img1} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        className="project-github-link"
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        className="project-deployed-link"
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
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
      </div>
    </section>
  );
}

export default Projects;
