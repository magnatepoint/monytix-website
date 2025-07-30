import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

// Import the logo directly
import MonytixLogoImage from '../assets/logo/transparency-01.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-content">
        <div className="header-logo" onClick={() => scrollToSection('hero')}>
          <img 
            src={MonytixLogoImage} 
            alt="Monytix" 
            className="header-logo-image"
            onError={(e) => {
              // Fallback to CSS logo if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="header-logo-text" style={{ display: 'none' }}>
            <span className="logo-symbol">M</span>
            <div className="logo-bars">
              <div className="logo-bar"></div>
              <div className="logo-bar"></div>
              <div className="logo-bar"></div>
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('hero')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('market')}
              >
                Market
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('process')}
              >
                Product
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('traction')}
              >
                Traction
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('team')}
              >
                Team
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('revenue')}
              >
                Business
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <div className="mvp-badge-header">MVP 2024</div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 