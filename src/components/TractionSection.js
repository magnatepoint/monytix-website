import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TractionSection.css';

const TractionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tractionMetrics = [
    {
      value: "5,000+",
      label: "Pre-Launch Signups",
      description: "Organic registrations for early access",
      growth: "+200% MoM",
      icon: "👥"
    },
    {
      value: "85%",
      label: "User Interest Score",
      description: "Based on market research surveys",
      growth: "High Intent",
      icon: "📊"
    },
    {
      value: "12",
      label: "Pilot Partners",
      description: "Corporate clients for beta testing",
      growth: "Active",
      icon: "🤝"
    },
    {
      value: "₹2.5Cr",
      label: "LOI Pipeline",
      description: "Letters of Intent from enterprise clients",
      growth: "Committed",
      icon: "💼"
    }
  ];

  const milestones = [
    {
      date: "Q4 2023",
      title: "Market Research Complete",
      description: "Comprehensive analysis of Indian personal finance landscape",
      status: "completed"
    },
    {
      date: "Q1 2024",
      title: "MVP Development",
      description: "Core platform features and AI engine development",
      status: "completed"
    },
    {
      date: "Q2 2024",
      title: "Beta Launch",
      description: "Limited beta with 500 early adopters",
      status: "in-progress"
    },
    {
      date: "Q3 2024",
      title: "Pilot Program",
      description: "Enterprise pilot with 5 corporate partners",
      status: "planned"
    },
    {
      date: "Q4 2024",
      title: "Public Launch",
      description: "Full market launch with consumer and enterprise tiers",
      status: "planned"
    }
  ];

  const userFeedback = [
    {
      quote: "Finally, a platform that understands the Indian financial mindset. The budgeting insights are incredibly accurate.",
      author: "Beta User #1",
      role: "Software Engineer, Bangalore",
      rating: 5
    },
    {
      quote: "The investment recommendations are personalized and easy to understand. Much better than existing apps.",
      author: "Beta User #2", 
      role: "Marketing Manager, Mumbai",
      rating: 5
    },
    {
      quote: "Love how it integrates all my accounts. The financial planning feature helped me save ₹50,000 already.",
      author: "Beta User #3",
      role: "Consultant, Delhi",
      rating: 5
    }
  ];

  const mediaRecognition = [
    {
      title: "Featured in Economic Times",
      description: "Startup to Watch in Fintech 2024",
      date: "March 2024"
    },
    {
      title: "YourStory Coverage",
      description: "Innovative Approach to Personal Finance",
      date: "February 2024"
    },
    {
      title: "TechCrunch India",
      description: "AI-Driven Financial Planning Revolution",
      date: "January 2024"
    }
  ];

  return (
    <section className="traction-section section" data-section="traction" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-secondary">
            Proven Early Traction
          </h2>
          <p className="text-large">
            Strong market validation with impressive pre-launch metrics demonstrating 
            significant user demand and enterprise interest across India.
          </p>
        </motion.div>

        <div className="traction-content">
          {/* Key Metrics */}
          <motion.div
            className="traction-metrics"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="metrics-grid">
              {tractionMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="metric-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-description">{metric.description}</div>
                  <div className="metric-growth">{metric.growth}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="milestones"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="subsection-title">Execution Timeline</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${milestone.status}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">{milestone.date}</div>
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-description">{milestone.description}</p>
                    <div className={`timeline-status ${milestone.status}`}>
                      {milestone.status === 'completed' && '✓ Completed'}
                      {milestone.status === 'in-progress' && '⏳ In Progress'}
                      {milestone.status === 'planned' && '📅 Planned'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Feedback */}
          <motion.div
            className="user-feedback"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="subsection-title">User Validation</h3>
            <div className="feedback-grid">
              {userFeedback.map((feedback, index) => (
                <motion.div
                  key={index}
                  className="feedback-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -3 }}
                >
                  <div className="feedback-rating">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <blockquote className="feedback-quote">"{feedback.quote}"</blockquote>
                  <div className="feedback-author">
                    <div className="author-name">{feedback.author}</div>
                    <div className="author-role">{feedback.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Media Recognition */}
        <motion.div
          className="media-recognition"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="subsection-title">Media Recognition</h3>
          <div className="media-grid">
            {mediaRecognition.map((item, index) => (
              <motion.div
                key={index}
                className="media-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h4 className="media-title">{item.title}</h4>
                <p className="media-description">{item.description}</p>
                <div className="media-date">{item.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Traction Summary */}
        <motion.div
          className="traction-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="summary-card">
            <h3>Strong Foundation for Scale</h3>
            <p>
              Our early traction demonstrates product-market fit with clear user demand. 
              The combination of organic user growth, enterprise interest, and positive feedback 
              positions Monytix for rapid scaling once we secure Series A funding.
            </p>
            <div className="next-goals">
              <div className="goal">
                <span className="goal-metric">50K+</span>
                <span className="goal-label">Users by Q4 2024</span>
              </div>
              <div className="goal">
                <span className="goal-metric">₹10Cr+</span>
                <span className="goal-label">ARR Target by 2025</span>
              </div>
              <div className="goal">
                <span className="goal-metric">Tier 1</span>
                <span className="goal-label">Cities Market Leader</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TractionSection; 