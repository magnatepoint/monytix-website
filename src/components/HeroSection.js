import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';
import './HeroSection.css';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expandIcon = (
    <svg className="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
    </svg>
  );

  const handleExploreVision = () => {
    // Scroll to process section to show the vision
    const processSection = document.querySelector('.process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section section" data-section="hero" ref={ref}>
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="heading-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Monytix, Your Personal Finance Command Centre
            </motion.h1>
            
            <motion.p 
              className="text-large"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your financial future with intelligent budgeting, smart savings strategies, 
              and personalized investment insights. Experience the next generation of personal finance management.
            </motion.p>

            <motion.div 
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTAButton 
                onClick={handleExploreVision} 
                variant="primary" 
                size="large"
              >
                {expandIcon}
                Explore Our Vision
              </CTAButton>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Step Process</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Personalized</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Access</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">MVP</div>
                <div className="stat-label">2024</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="financial-dashboard">
              <div className="dashboard-header">
                <div className="dashboard-title">Financial Overview</div>
                <div className="dashboard-date">December 2024</div>
              </div>
              
              <div className="balance-card">
                <div className="balance-label">Total Balance</div>
                <div className="balance-amount">₹2,45,680</div>
                <div className="balance-change positive">+12.5% this month</div>
              </div>

              <div className="quick-stats">
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <div className="stat-info">
                    <div className="stat-title">Savings</div>
                    <div className="stat-value">₹85,240</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <div className="stat-title">Investments</div>
                    <div className="stat-value">₹1,25,680</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-info">
                    <div className="stat-title">Goals</div>
                    <div className="stat-value">3 Active</div>
                  </div>
                </div>
              </div>

              <div className="chart-area">
                <div className="chart-header">Monthly Growth</div>
                <div className="chart-bars">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '75%' }}></div>
                  <div className="chart-bar" style={{ height: '45%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '85%' }}></div>
                  <div className="chart-bar" style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 