import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaRocket } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
     
        <div className="contact-cta">
          <h3>Ready to Start a Project?</h3>
          <p>
            With 2+ years of experience in full-stack development, I'm ready to bring your 
            ideas to life. Let's create something amazing together!
          </p>
          <button 
            className="btn btn-outline"
            onClick={() => window.open('https://drive.google.com/file/d/1n6KjYZ5BTUlMTbuxPqijQjUVrQHfjRLc/view?usp=sharing', '_blank')}
          >
            <FaRocket />
            <span>Download My Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
