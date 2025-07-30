import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MarketOpportunitySection.css';

const MarketOpportunitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const marketStats = [
    {
      value: "₹4.2T",
      label: "Indian Personal Finance Market",
      description: "Total addressable market size in India",
      growth: "+18% CAGR"
    },
    {
      value: "450M+",
      label: "Smartphone Users",
      description: "Potential digital-first customers",
      growth: "+12% YoY"
    },
    {
      value: "68%",
      label: "Financially Underserved",
      description: "Adults lacking comprehensive financial planning",
      growth: "Key Target"
    },
    {
      value: "₹50Cr+",
      label: "Immediate Opportunity",
      description: "Serviceable addressable market for MVP",
      growth: "2024-2026"
    }
  ];

  const painPoints = [
    {
      icon: "📊",
      title: "Fragmented Financial Data",
      description: "Users manage finances across 5+ platforms with no unified view"
    },
    {
      icon: "💸",
      title: "Poor Budgeting Habits",
      description: "78% of Indians exceed monthly budgets due to lack of real-time tracking"
    },
    {
      icon: "📈",
      title: "Investment Paralysis",
      description: "65% avoid investing due to complexity and lack of personalized guidance"
    },
    {
      icon: "🎯",
      title: "Goal Misalignment",
      description: "83% have financial goals but no structured plan to achieve them"
    }
  ];

  return (
    <section className="market-opportunity-section section" data-section="market" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-secondary">
            Massive Market Opportunity
          </h2>
          <p className="text-large">
            India's personal finance sector is experiencing unprecedented digital transformation, 
            creating a ₹4.2 trillion market opportunity for innovative solutions.
          </p>
        </motion.div>

        <div className="market-content">
          {/* Market Statistics */}
          <motion.div
            className="market-stats"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stats-grid">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card-large"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="stat-value-large">{stat.value}</div>
                  <div className="stat-label-large">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                  <div className="stat-growth">{stat.growth}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Market Pain Points */}
          <motion.div
            className="pain-points"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="subsection-title">Critical Market Pain Points</h3>
            <div className="pain-points-grid">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="pain-point-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="pain-icon">{point.icon}</div>
                  <h4 className="pain-title">{point.title}</h4>
                  <p className="pain-description">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="market-conclusion"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="conclusion-card">
            <h3>The Monytix Opportunity</h3>
            <p>
              By addressing these critical pain points with AI-driven personalization and 
              comprehensive financial management, Monytix is positioned to capture significant 
              market share in this rapidly expanding sector.
            </p>
            <div className="opportunity-metrics">
              <div className="metric">
                <span className="metric-value">₹500Cr</span>
                <span className="metric-label">5-Year Revenue Target</span>
              </div>
              <div className="metric">
                <span className="metric-value">10M+</span>
                <span className="metric-label">Target User Base</span>
              </div>
              <div className="metric">
                <span className="metric-value">2025</span>
                <span className="metric-label">Break-even Target</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection; 