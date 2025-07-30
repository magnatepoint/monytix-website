import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';
import './CommandCentreSection.css';

const CommandCentreSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Try to import the logo, fallback to placeholder if not available
  let MonytixLogo = null;
  try {
    MonytixLogo = require('../assets/logo/transparency-01.png');
  } catch (error) {
    // Logo not uploaded yet - will show fallback
    MonytixLogo = null;
  }

  const handleInvestmentInquiry = () => {
    // Show investment inquiry message
    alert('💼 Thank you for your interest! Please contact our team at investors@monytix.com for detailed business plan and investment opportunities.');
  };

  return (
    <section className="section command-centre-section" ref={ref}>
      <div className="section-content">
        <div className="command-grid">
          <motion.div
            className="command-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-primary">
              Monytix:<br />
              Your Personal Finance<br />
              Command Centre
            </h2>
            <p className="text-large">
              Monytix is envisioned as a comprehensive personal finance management platform that will empower individuals to take control of their financial well-being. Our planned intuitive interface and powerful features will seamlessly integrate with users' financial accounts, providing a centralised hub to track spending, monitor budgets, and plan for the future.
            </p>
            
            <motion.div
              className="command-cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTAButton 
                variant="primary" 
                size="medium"
                onClick={handleInvestmentInquiry}
                icon="💼"
                trackingLocation="command-centre"
              >
                Investment Inquiry
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="card-display"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: -15 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="credit-card">
              <div className="card-background"></div>
              <div className="card-content">
                <div className="card-logo">
                  {MonytixLogo ? (
                    // Use actual logo if available
                    <img 
                      src={MonytixLogo} 
                      alt="Monytix" 
                      className="card-logo-image"
                    />
                  ) : (
                    // Fallback to CSS logo
                    <>
                      <div className="logo-icon">
                        <div className="logo-symbol">M</div>
                        <div className="logo-bars">
                          <div className="logo-bar"></div>
                          <div className="logo-bar"></div>
                          <div className="logo-bar"></div>
                        </div>
                      </div>
                      <span className="logo-text">Monytix</span>
                    </>
                  )}
                </div>
                
                <div className="card-chip">
                  <div className="chip-lines">
                    <div className="chip-line"></div>
                    <div className="chip-line"></div>
                    <div className="chip-line"></div>
                    <div className="chip-line"></div>
                  </div>
                </div>
                
                <div className="card-number">
                  <span>****</span>
                  <span>****</span>
                  <span>****</span>
                  <span>8742</span>
                </div>
                
                <div className="card-details">
                  <div className="card-holder">
                    <div className="label">Card Holder</div>
                    <div className="name">AlGani Helmi</div>
                  </div>
                  <div className="expiry">
                    <div className="label">Valid Thru</div>
                    <div className="date">12/28</div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              className="card-message"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="message-title">Designed to make managing finances easier!</h3>
              <p className="message-text">
                Our vision includes integrated payment solutions and smart financial recommendations for users.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommandCentreSection; 