import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProcessSection.css';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      number: "1",
      title: "Budget",
      description: "Create a comprehensive budget to track your income and expenses, establishing the foundation for your financial journey."
    },
    {
      number: "2",
      title: "Save",
      description: "Build healthy saving habits and establish an emergency fund to secure your financial stability."
    },
    {
      number: "3",
      title: "Build Necessary Fund",
      description: "Develop essential funds for emergencies, insurance, and immediate financial needs before taking risks."
    },
    {
      number: "4",
      title: "Understand Goals",
      description: "Define clear short-term and long-term financial goals to guide your investment strategy and financial decisions."
    },
    {
      number: "5",
      title: "Then Invest",
      description: "Once you have a solid foundation, strategically invest to grow your wealth and achieve your financial objectives."
    }
  ];

  return (
    <section className="section process-section" ref={ref}>
      <div className="section-content">
        <motion.h2
          className="heading-secondary process-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Monytix Process
        </motion.h2>
        
        <div className="process-container">
          <div className="pyramid-container">
            <motion.div
              className="pyramid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`pyramid-level level-${index + 1}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  <div className="pyramid-number">{step.number}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="process-content">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="process-step"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
              >
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="process-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          The Monytix process guides users through a structured financial journey: starting with budgeting basics, building saving habits, creating necessary funds for security, understanding personal goals, and finally making strategic investments. This step-by-step approach ensures a solid foundation before taking investment risks.
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessSection; 