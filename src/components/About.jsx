import React from "react";
import img1 from "../assests/Saly-16.png";
import img2 from "../assests/Saly-10.png";

function About() {
  return (
    <section id="about" className="about section">
      <h1>About Me</h1>
      <div className="about_card">
        <img className="about_img" src={img2} alt="About Mohd Adil" />
        <div>
          <p id="user-detail-intro" className="my-details">
            I'm a passionate <strong>Full-Stack Web Developer</strong> from India with over a year of professional experience in building modern, scalable web applications. My journey in web development has been driven by curiosity and a genuine love for creating digital solutions that make a difference.
          </p>
          <br />
          <p>
            I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) and have hands-on experience with modern JavaScript frameworks and libraries. From crafting responsive user interfaces to building robust backend APIs, I enjoy every aspect of the development process.
          </p>
          <br />
          <p>
            What drives me is the opportunity to solve real-world problems through code. I'm constantly learning new technologies and best practices to stay current with the ever-evolving web development landscape. I believe in writing clean, maintainable code and creating user experiences that are both functional and delightful.
          </p>
          <br />
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or planning my next learning adventure. I'm always excited to collaborate on interesting projects and connect with fellow developers!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;


