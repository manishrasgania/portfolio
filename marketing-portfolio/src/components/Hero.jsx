// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImage from '../assets/RR.png';

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = ["नमस्ते", "Hello", "Hola", "Bonjour","안녕", "Ciao", "你好",];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-container">
        {/* Left Side - Visually Enhanced Content */}
        <div className="hero-content">
          {/* Name First - More Prominent 
          <div className="name-main">
            <h1>R</h1>
          </div> */}

          {/* Rotating Greeting with Better Design */}
          <div className="greeting-enhanced">
            <div className="greeting-badge">
              <span className="greeting-text">{greetings[currentGreeting]}</span>
            </div>
          </div>

          {/* Title and Description with Better Layout */}
          <div className="intro-content">
            <div className="title-section">
              <h2>Hey, I'm <span className="highlight">Radhika Sharma</span></h2>
              <h3>A Brand & Marketing Strategist</h3>
            </div>

            <div className="description-enhanced">
              <p>
                I craft innovative marketing solutions that drive measurable results. 
                With expertise in brand strategy, digital campaigns, and growth marketing, 
                I help businesses achieve their goals through data-informed decisions.
              </p>
            </div>
          </div>

          {/* Stylish Divider */}
          <div className="styled-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>

          {/* Enhanced Button */}
          <div className="cta-section">
            <button className="cta-button-enhanced" onClick={handleViewWork}>
              <span className="btn-text">View My Work</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image with Frame (Keep exactly as is) */}
        <div className="hero-image-section">
          <div className="image-frame">
            <img 
              src={profileImage} 
              alt="Professional Marketing Strategist" 
              className="profile-image"
            />
            
          </div>
          
          {/* Smaller Floating Cards around the image */}
          <div className="floating-card card-1">
            <div className="card-icon">📈</div>
            <h4>Marketing</h4>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎯</div>
            <h4>Brand Strategy</h4>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🚀</div>
            <h4>Consumer Psychology</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;