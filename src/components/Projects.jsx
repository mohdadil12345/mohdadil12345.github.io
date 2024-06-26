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


import { FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { FaReact, FaNodeJs, FaSass, FaAngular   } from "react-icons/fa6";
// https://react-icons.github.io/react-icons/icons?name=fa

let projects = [

  {
    title: "Sasta Safar",
    img1: abc,
    img2: iph,
    description: "Sasta Safar is an ecotourism website that empowers users to select their desired travel destinations and book their tickets. Whether users are planning a nature retreat or an adventurous expedition, Sasta Safar offers a user-friendly platform to explore various destinations and secure their travel tickets with ease",
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
    git: "https://github.com/mymsa123/quixotic-snail-9802",
    preview: "https://glittery-elf-a56a10.netlify.app/",
  },
  
  {
    title: "Home chef",
    img1: homechef,
    img2: homechef2,
    description: "A Home Chef website clone is a replica of the popular Home Chef service online. It lets users discover and choose recipes, customize meal plans, and receive pre-measured ingredients at their doorstep. Just like Home Chef, this platform aims to make cooking easy and enjoyable, offering a convenient solution for those who want home-cooked meals without the hassle of grocery shopping.",
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
        name: "Reactjs",
        icon: <FaReact />,
      },
      {
        name: "Nodejs",
        icon: <FaNodeJs />,
      },
    ],
    git: "https://github.com/mohdadil12345/Home_Chef",
    preview: "https://home-chef-neon.vercel.app/",
  },
  {
    title: "Dressify",
    img1: dressify,
    img2: abc2,
    description: "Dressify is one-stop destination for fashionable clothing  for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",
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
        name: "Reactjs",
        icon: <FaReact />,
      },
      {
        name: "Sass",
        icon: <FaSass />,
      },
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-eight.vercel.app/",
  },
  {
    title: "Ecotourism",
    img1: oddgrass,
    img2: oddgras,
    description: "Gamy Part is a website designed to help users explore the world . It offers convenient features that allow users to book destinations, hotels, and activities with just a tap. The platform boasts a simple and user-friendly UI/UX, ensuring a seamless experience for travelers looking to plan their journeys.",  
    
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
    git: "https://github.com/harsh7739/odd-grass-4307",
    preview: "https://resonant-meringue-f6cdea.netlify.app/",
  },
  {
    title: "Olx-Clone",
    img1: olxx,
    img2: olx,
    description: "Gamy Part is a website clone of OLX, where users can browse and select products they want to buy. Similar to OLX, Gamy Part allows users to choose from a variety of products available on the platform.",

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
    git: "https://github.com/mohdadil12345/gamy-part-5391",
    preview: "https://darling-souffle-a3c765.netlify.app/",
  },
  {
    title: "Todo-app",
    img1: todo1,
    img2: todo2,
    description: "Create a user-friendly todo-app that efficiently organizes tasks, allows users to add todos and perform crud operation in online as well as offline mode.",

    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "SASS",
        icon: <FaSass />,
      },
      {
        name: "JS",
        icon: <FaJsSquare />,
      },
      {
        name: "Angular",
        icon: <FaAngular />
      },
      {
        name: "Typescript",
        icon: <FaJsSquare />,
      },
    ],
    git: "https://github.com/mohdadil12345/TODO_APP",
    preview: "https://todo-application-pied-phi.vercel.app/todo",
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
              <img src={el.img1} alt="" />
            </div>
            <div className="pro-img1">
              <img src={el.img2} alt="" />
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
