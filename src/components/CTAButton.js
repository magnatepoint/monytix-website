import React from 'react';
import { motion } from 'framer-motion';
import { trackCTAClick } from './AnalyticsSetup';
import './CTAButton.css';

const CTAButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href,
  icon,
  className = '',
  disabled = false,
  trackingLocation = 'unknown',
  ...props 
}) => {
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const handleClick = (e) => {
    // Track the CTA click
    trackCTAClick(children, trackingLocation);
    
    // Call the original onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  const handleLinkClick = (e) => {
    // Track the CTA click for links
    trackCTAClick(children, trackingLocation);
  };

  const Component = href ? motion.a : motion.button;
  const baseProps = href ? { href, onClick: handleLinkClick } : { onClick: handleClick };

  return (
    <Component
      className={`cta-button cta-${variant} cta-${size} ${className}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      disabled={disabled}
      {...baseProps}
      {...props}
    >
      <span className="cta-content">
        {icon && <span className="cta-icon">{icon}</span>}
        <span className="cta-text">{children}</span>
      </span>
      <div className="cta-shimmer"></div>
    </Component>
  );
};

export default CTAButton; 