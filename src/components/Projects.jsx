import React from "react";
import sastasafar from "../assests/sastasafar.png";
import oddgrass from "../assests/oddgrass.png";

import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
// https://react-icons.github.io/react-icons/icons?name=fa

let projects = [
  {
    title: "Sastasafar",
    img: sastasafar,
    description: "Dressify is one-stop destination for fashionable clothing and accessories for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "project-2",
    img: oddgrass,
    description: "des-2",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "project-1",
    img: sastasafar,
    description: "des-1",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "project-2",
    img: oddgrass,
    description: "des-2",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "project-1",
    img: sastasafar,
    description: "des-1",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "project-2",
    img: oddgrass,
    description: "des-2",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
];

function Projects() {
  return (
    <div id="projects">
      <h1>Projects </h1>
      <div className="all_projects">
        {projects.map((el) => (
          <div className="project-card">
            <div className="pro-img">
              <img src={el.img} alt="" />
            </div>

            <div className="pro-Info">
              <h2 className="project-title">{el.title}</h2>
              <p className="project-description">{el.description}</p>
              <h2>Tech Stack</h2>
              <div className="project-tech-stack">
                {el.skills.map((skill) => (
                  <div className="skills-card">
                    {skill.icon}
                    <p style={{ fontSize: "20px" }}>{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="pro-anchortag">
                <a
                  className="project-github-link"
                  href={el.git}
                  target="_blank"
                >
                  <button>Github Code</button>
                </a>
                <a
                  className="project-deployed-link"
                  target="_blank"
                  href={el.preview}
                >
                  <button>Preview</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

// Each project card in the Projects section should have class="project-card" and the following:
// Image of the project
// Title : class="project-title"
// Description : class="project-description"
// Tech stack used : class="project-tech-stack"
// Link to GitHub repository : class="project-github-link"
// Deployed link or video link : class="project-deployed-link"