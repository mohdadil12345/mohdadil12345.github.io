import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact">
      <div className="contact_details">
        <h1>Let's Connect!</h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: 'var(--text-secondary)', 
          marginBottom: 'var(--space-2xl)',
          maxWidth: '500px',
          margin: '0 auto var(--space-2xl) auto',
          lineHeight: 1.6
        }}>
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to chat about technology, 
          feel free to reach out!
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 'var(--space-lg)', 
          marginBottom: 'var(--space-2xl)',
          maxWidth: '600px',
          margin: '0 auto var(--space-2xl) auto'
        }}>
          <div style={{
            background: 'var(--card-bg)',
            padding: 'var(--space-lg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <FaPhone style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: 'var(--space-sm)' }} />
            <h3 style={{ marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>Phone</h3>
            <p id="contact-phone" style={{ color: 'var(--text-secondary)' }}>+91 7017511862</p>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            padding: 'var(--space-lg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <FaEnvelope style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: 'var(--space-sm)' }} />
            <h3 style={{ marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>Email</h3>
            <a 
              href="mailto:md3530546@gmail.com" 
              id="contact-email" 
              style={{ 
                color: 'var(--text-secondary)', 
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              md3530546@gmail.com
            </a>
          </div>
        </div>

        <div className="my_icon">
          <a 
            id="contact-github" 
            href="https://github.com/mohdadil12345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/mohd-adil-634b0b241/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:md3530546@gmail.com"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
