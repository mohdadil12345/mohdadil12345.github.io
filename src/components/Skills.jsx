import React from "react";
import { 
  FaCss3Alt, 
  FaJsSquare, 
  FaAngular, 
  FaFigma, 
  FaHtml5, 
  FaSass, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsData = {
  "Frontend Development": [
    { name: "HTML5", icon: <FaHtml5 />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "Redux", icon: <SiRedux />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript />, level: 70 },
    { name: "SASS", icon: <FaSass />, level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 85 },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 85 }
  ],
  "Backend Development": [
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "Express.js", icon: <SiExpress />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "Database", icon: <FaDatabase />, level: 70 }
  ],
  "Tools & Others": [
    { name: "Git", icon: <FaGitAlt />, level: 80 },
    { name: "Figma", icon: <FaFigma />, level: 75 },
    { name: "Angular", icon: <FaAngular />, level: 65 }
  ]
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-content">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category-section">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skills-card">
                    <div className="skills-card-img">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <p className="skills-card-name">{skill.name}</p>
                      <div className="skill-level">
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <FaReact />
            </div>
            <div className="summary-content">
              <h4>Primary Focus</h4>
              <p>MERN Stack Development with modern JavaScript frameworks</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">
              <FaDatabase />
            </div>
            <div className="summary-content">
              <h4>Database</h4>
              <p>MongoDB, MySQL, and database design optimization</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">
              <FaFigma />
            </div>
            <div className="summary-content">
              <h4>Design Tools</h4>
              <p>Figma, responsive design, and user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
