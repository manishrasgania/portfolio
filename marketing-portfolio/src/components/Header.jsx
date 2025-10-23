// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        <div className="logo">
          <div className="logo-icon">🚀</div>
          <span className="logo-text">My Portfolio</span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="nav-cta">Let's Talk</button>
            </a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;