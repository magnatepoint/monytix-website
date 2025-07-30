import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InteractiveChart from './InteractiveChart';
import './DashboardSection.css';

const DashboardSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      number: "1",
      title: "Expense Analysis",
      description: "Detailed breakdown of spending habits and patterns",
      icon: "📊"
    },
    {
      number: "2", 
      title: "Budget Creation",
      description: "Personalised budgets based on income and financial goals",
      icon: "💰"
    },
    {
      number: "3",
      title: "Investment Tracking", 
      description: "Monitor and analyse investment performance across various accounts",
      icon: "📈"
    },
    {
      number: "4",
      title: "Personalised Financial Recommendations",
      description: "Resources and tools to improve financial literacy and decision-making",
      icon: "💡"
    }
  ];

  return (
    <section className="section dashboard-section" ref={ref}>
      <div className="section-content">
        <div className="dashboard-grid">
          <div className="solutions-panel">
            <motion.h2
              className="heading-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Planned Financial Solutions
            </motion.h2>
            
            <div className="solutions-list">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.number}
                  className="solution-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="solution-icon"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <span className="solution-number">{solution.number}</span>
                  </motion.div>
                  <div className="solution-content">
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="dashboard-mockup"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="dashboard-card">
              <motion.div 
                className="balance-section"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="balance-header">
                  <span className="balance-label">Projected Balance View</span>
                  <motion.select 
                    className="month-selector"
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                  >
                    <option>October</option>
                    <option>September</option>
                    <option>August</option>
                  </motion.select>
                </div>
                <motion.div 
                  className="balance-amount"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
                >
                  ₹1,10,000.32
                </motion.div>
              </motion.div>

              <motion.div
                className="income-section"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="section-header">
                  <span className="section-title">Income Tracking</span>
                  <motion.span 
                    className="see-all"
                    whileHover={{ color: "#f4c430", scale: 1.05 }}
                  >
                    Prototype
                  </motion.span>
                </div>
                <div className="income-item">
                  <span className="income-label">Monthly Income</span>
                  <motion.span 
                    className="income-amount"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    ₹1,50,000
                  </motion.span>
                  <motion.span 
                    className="income-change"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                  >
                    2.1%
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="spendings-section"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="section-header">
                  <span className="section-title">Analytics Prototype</span>
                  <motion.span 
                    className="see-all"
                    whileHover={{ color: "#f4c430", scale: 1.05 }}
                  >
                    Interactive
                  </motion.span>
                </div>
                
                <InteractiveChart />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection; 