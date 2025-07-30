import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './PlansSection.css';

const PlansSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section plans-section" ref={ref}>
      <div className="city-skyline">
        <div className="building building-1"></div>
        <div className="building building-2"></div>
        <div className="building building-3"></div>
        <div className="building building-4"></div>
        <div className="building building-5"></div>
        <div className="building building-6"></div>
        <div className="building building-7"></div>
        <div className="building building-8"></div>
      </div>
      
      <div className="section-content">
        <div className="plans-grid">
          <motion.div
            className="plans-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-primary">
              Find the right plan for your need
            </h2>
            
            <div className="plans-list">
              <motion.div
                className="plan-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="plan-description">
                  Monytix serves as a powerful Personal Finance management solution that bridges the gap between understanding money and making informed decisions on banking, investments, and payments.
                </p>
              </motion.div>
              
              <motion.div
                className="plan-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="plan-description">
                  Monytix is catered to <strong>B2B (SaaS for enriching transactions to financial institutions, banks and Businesses)</strong> and a <strong>B2C (mobile and web app for comprehensive finance solutions to end-users)</strong>, catering to the diverse needs of the Indian market.
                </p>
              </motion.div>
              
              <motion.div
                className="plan-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="plan-description">
                  With its AI-powered insights and seamless integration, Monytix can empower Indian consumers to take control of their financial well-being, while providing financial institutions with valuable data-driven tools to enhance their offerings and better serve their customers.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="skyline-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="skyline-overlay">
              <div className="people-silhouettes">
                <div className="person person-1"></div>
                <div className="person person-2"></div>
                <div className="person person-3"></div>
                <div className="person person-4"></div>
                <div className="person person-5"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection; 