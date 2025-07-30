import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CompetitiveAdvantageSection.css';

const CompetitiveAdvantageSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const competitors = [
    {
      name: "Traditional Banks",
      weaknesses: [
        "Limited digital financial planning tools",
        "Complex user interfaces", 
        "No AI-driven personalization",
        "Focus on lending, not holistic planning"
      ],
      marketShare: "45%"
    },
    {
      name: "Fintech Apps (Paytm, PhonePe)",
      weaknesses: [
        "Transaction-focused, not planning-focused",
        "Basic budgeting features",
        "No comprehensive investment advice",
        "Limited financial education"
      ],
      marketShare: "30%"
    },
    {
      name: "Investment Platforms",
      weaknesses: [
        "Investment-only focus",
        "No budgeting or expense tracking",
        "Complex for beginners",
        "Separate from daily financial management"
      ],
      marketShare: "15%"
    },
    {
      name: "Financial Advisors",
      weaknesses: [
        "High cost, limited accessibility",
        "Manual processes",
        "No real-time tracking",
        "Only for high-net-worth individuals"
      ],
      marketShare: "10%"
    }
  ];

  const monytixAdvantages = [
    {
      title: "AI-Powered Personalization",
      description: "Advanced machine learning algorithms provide personalized financial recommendations based on individual spending patterns, income, and goals.",
      icon: "🤖",
      competitive: "First in India to offer truly personalized AI-driven financial advice"
    },
    {
      title: "Comprehensive Integration",
      description: "Single platform combining budgeting, investing, goal planning, and financial education - eliminating the need for multiple apps.",
      icon: "🔗",
      competitive: "Only platform offering end-to-end financial lifecycle management"
    },
    {
      title: "Indian Financial Context",
      description: "Built specifically for Indian financial ecosystem with support for local banking, investment options, tax structures, and cultural spending patterns.",
      icon: "🇮🇳",
      competitive: "Deep understanding of Indian financial mindset and regulations"
    },
    {
      title: "Educational Focus",
      description: "Integrated financial literacy programs with gamification, making complex financial concepts accessible to everyday users.",
      icon: "📚",
      competitive: "First platform to combine financial management with systematic education"
    },
    {
      title: "Real-time Intelligence",
      description: "Live market data integration with instant notifications for budget alerts, investment opportunities, and goal progress tracking.",
      icon: "⚡",
      competitive: "Real-time financial intelligence and proactive recommendations"
    },
    {
      title: "Multi-generational Approach",
      description: "Family-centric features allowing parents to teach children financial responsibility while managing household finances collaboratively.",
      icon: "👨‍👩‍👧‍👦",
      competitive: "Only platform designed for entire family financial wellness"
    }
  ];

  const marketPositioning = [
    {
      category: "User Experience",
      monytix: "Intuitive, AI-guided interface",
      competitors: "Complex, fragmented experiences",
      advantage: "95% user satisfaction vs 65% industry average"
    },
    {
      category: "Feature Completeness",
      monytix: "All-in-one financial ecosystem",
      competitors: "Single-purpose solutions",
      advantage: "80% fewer apps needed for financial management"
    },
    {
      category: "Personalization",
      monytix: "AI-driven individual recommendations",
      competitors: "Generic advice and tools",
      advantage: "3x higher user engagement rates"
    },
    {
      category: "Market Understanding",
      monytix: "Built for Indian financial culture",
      competitors: "Global solutions adapted for India",
      advantage: "2x faster user onboarding and adoption"
    },
    {
      category: "Cost Efficiency",
      monytix: "Transparent, accessible pricing",
      competitors: "Hidden fees, premium-only features",
      advantage: "70% cost savings for users vs traditional advisors"
    }
  ];

  const moatFactors = [
    {
      title: "Data Network Effects",
      description: "The more users on the platform, the better our AI becomes at providing financial recommendations for everyone.",
      strength: "Strong"
    },
    {
      title: "Regulatory Compliance",
      description: "Deep compliance with Indian financial regulations (RBI, SEBI) creates high barriers for international competitors.",
      strength: "Very Strong"
    },
    {
      title: "Brand Trust",
      description: "Early market leadership in comprehensive financial wellness builds strong brand recognition and user loyalty.",
      strength: "Strong"
    },
    {
      title: "Technology Stack",
      description: "Proprietary AI algorithms and financial modeling tools that are difficult to replicate quickly.",
      strength: "Strong"
    },
    {
      title: "Partnership Ecosystem",
      description: "Strategic integrations with banks, investment platforms, and financial institutions create switching costs.",
      strength: "Very Strong"
    }
  ];

  return (
    <section className="competitive-section section" data-section="competitive" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-secondary">
            Unmatched Competitive Advantage
          </h2>
          <p className="text-large">
            Monytix's unique combination of AI technology, comprehensive features, and deep 
            Indian market understanding creates sustainable competitive moats.
          </p>
        </motion.div>

        <div className="competitive-content">
          {/* Monytix Advantages */}
          <motion.div
            className="advantages-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="subsection-title">Our Unique Strengths</h3>
            <div className="advantages-grid">
              {monytixAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="advantage-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="advantage-icon">{advantage.icon}</div>
                  <h4 className="advantage-title">{advantage.title}</h4>
                  <p className="advantage-description">{advantage.description}</p>
                  <div className="advantage-competitive">{advantage.competitive}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competitive Landscape */}
          <motion.div
            className="competitive-landscape"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="subsection-title">Competitive Landscape Analysis</h3>
            <div className="competitors-grid">
              {competitors.map((competitor, index) => (
                <motion.div
                  key={index}
                  className="competitor-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="competitor-header">
                    <h4 className="competitor-name">{competitor.name}</h4>
                    <div className="market-share">{competitor.marketShare} Market Share</div>
                  </div>
                  <div className="competitor-weaknesses">
                    <h5>Key Weaknesses:</h5>
                    <ul>
                      {competitor.weaknesses.map((weakness, i) => (
                        <li key={i}>
                          <span className="weakness-icon">❌</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Market Positioning */}
          <motion.div
            className="market-positioning"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="subsection-title">Competitive Positioning</h3>
            <div className="positioning-table">
              <div className="table-header">
                <div>Category</div>
                <div>Monytix</div>
                <div>Competitors</div>
                <div>Our Advantage</div>
              </div>
              {marketPositioning.map((position, index) => (
                <motion.div
                  key={index}
                  className="positioning-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="category">{position.category}</div>
                  <div className="monytix-value">{position.monytix}</div>
                  <div className="competitor-value">{position.competitors}</div>
                  <div className="advantage-value">{position.advantage}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Moat Factors */}
        <motion.div
          className="moat-factors"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="subsection-title">Sustainable Competitive Moats</h3>
          <div className="moats-grid">
            {moatFactors.map((moat, index) => (
              <motion.div
                key={index}
                className="moat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h4 className="moat-title">{moat.title}</h4>
                <p className="moat-description">{moat.description}</p>
                <div className={`moat-strength ${moat.strength.toLowerCase().replace(' ', '-')}`}>
                  {moat.strength} Moat
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Summary */}
        <motion.div
          className="competitive-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="summary-card">
            <h3>Why We Win</h3>
            <p>
              Monytix combines the best of fintech innovation with deep understanding of 
              Indian financial culture. While competitors focus on single solutions, we provide 
              a comprehensive ecosystem that grows with our users' financial journey.
            </p>
            <div className="win-factors">
              <div className="win-factor">
                <div className="factor-icon">🎯</div>
                <h4>Market Timing</h4>
                <p>Perfect timing as India digitizes its financial infrastructure</p>
              </div>
              <div className="win-factor">
                <div className="factor-icon">🚀</div>
                <h4>Technology Edge</h4>
                <p>AI-first approach with proprietary financial intelligence</p>
              </div>
              <div className="win-factor">
                <div className="factor-icon">🏆</div>
                <h4>Team Expertise</h4>
                <p>Deep fintech experience with proven track record</p>
              </div>
              <div className="win-factor">
                <div className="factor-icon">💪</div>
                <h4>Execution Speed</h4>
                <p>Rapid development and market entry capabilities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection; 