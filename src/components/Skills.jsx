import React from "react";
import { 
  FaCss3Alt, 
  FaJsSquare, 
  FaFigma, 
  FaHtml5, 
  FaSass, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaAws
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiRedux, 
  SiTailwindcss, 
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiPostman
} from "react-icons/si";

const skillsData = {
  "Frontend Development": [
    { name: "React", icon: <FaReact />, level: 95, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178C6" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#000000" },
    { name: "JavaScript", icon: <FaJsSquare />, level: 92, color: "#F7DF1E" },
    { name: "Redux", icon: <SiRedux />, level: 88, color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "#06B6D4" },
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 92, color: "#1572B6" },
    { name: "SASS", icon: <FaSass />, level: 88, color: "#CC6699" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "#7952B3" }
  ],
  "Backend Development": [
    { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, level: 88, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, level: 88, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 78, color: "#4169E1" },
    { name: "GraphQL", icon: <SiGraphql />, level: 75, color: "#E10098" },
    { name: "REST APIs", icon: <FaDatabase />, level: 92, color: "#FF6B6B" }
  ],
  "Tools & DevOps": [
    { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
    { name: "Docker", icon: <FaDocker />, level: 72, color: "#2496ED" },
    { name: "AWS", icon: <FaAws />, level: 68, color: "#FF9900" },
    { name: "Jest", icon: <SiJest />, level: 78, color: "#C21325" },
    { name: "Postman", icon: <SiPostman />, level: 85, color: "#FF6C37" },
    { name: "Figma", icon: <FaFigma />, level: 80, color: "#F24E1E" }
  ]
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit I've mastered over 2+ years of building web applications
          </p>
        </div>
        
        <div className="skills-content">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category-section">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skills-card"
                    style={{ '--skill-color': skill.color, '--animation-delay': `${index * 0.1}s` }}
                  >
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
            <div className="summary-number">15+</div>
            <div className="summary-content">
              <h4>Technologies</h4>
              <p>Mastered and actively using in projects</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-number">2+</div>
            <div className="summary-content">
              <h4>Years Experience</h4>
              <p>Building production-ready applications</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-number">∞</div>
            <div className="summary-content">
              <h4>Learning</h4>
              <p>Always exploring new technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
