// src/components/ContactInfo.jsx
import React from 'react';
import './ContactInfo.css';

// Import actual logos
import GmailLogo from '../assets/gmail.png';
import LinkedInLogo from '../assets/linkedin.png';

const ContactInfo = () => {
  const contactLinks = [
    {
      name: 'Email',
      logo: GmailLogo,
      url: 'mailto:radhikadrd1812@gmail.com',
      description: 'Send me an email to discuss opportunities',
      buttonText: 'Send Email'
    },
    {
      name: 'LinkedIn',
      logo: LinkedInLogo,
      url: 'https://www.linkedin.com/in/radhika-sharma-9907b1190/',
      description: 'Connect with me on LinkedIn',
      buttonText: 'Connect on LinkedIn'
    }
  ];

  return (
    <section id="contact" className="contact-info">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for opportunities or to discuss marketing strategies</p>
        </div>
        
        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            <div 
              key={index}
              className="contact-card"
              onClick={() => window.open(link.url, '_blank')}
            >
              <div className="contact-icon">
                <img 
                  src={link.logo} 
                  alt={`${link.name} logo`}
                  className="contact-logo"
                />
              </div>
              <div className="contact-content">
                <h3>{link.name}</h3>
                <p>{link.description}</p>
                <button className="contact-button">
                  {link.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;