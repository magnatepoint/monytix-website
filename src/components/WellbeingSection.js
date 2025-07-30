import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WellbeingSection.css';

const WellbeingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expandIcon = (
    <svg className="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
    </svg>
  );

  return (
    <section className="section wellbeing-section" ref={ref}>
      <div className="section-content">
        <motion.div
          className="content-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {expandIcon}
          <motion.h2
            className="heading-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Financial Well-being with Monytix
          </motion.h2>
          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Holistic Financial Management Monytix offers a comprehensive solution for managing all aspects of your financial life. From budgeting and expense tracking to investment monitoring and goal setting, our platform provides the tools you need to achieve financial clarity and success.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WellbeingSection; 