import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
function Contact() {

  return (
    <div id="contact">
      <div className="contact_details">
        <h2>Contact-Me</h2>
        <p id="contact-phone">+91 7017511862</p>
        <p id="contact-email">md3530546@gmail.com</p>

        <div className="my_icon">
          <a id="contact-github" href="https://github.com/mohdadil12345">
            <FaGithub/>
          </a>
          <br />
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/mohd-adil-634b0b241/"
          >
           <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
