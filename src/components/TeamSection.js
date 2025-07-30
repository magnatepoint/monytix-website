import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TeamSection.css';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Sandeep Malla",
      role: "Founder & CEO",
      expertise: "Product Strategy & Business Development",
      background: "Ex-Fintech Executive with 8+ years in digital financial services",
      achievements: [
        "Built and scaled 3 fintech products serving 1M+ users",
        "Former VP at leading Indian fintech unicorn",
        "MBA in Finance & Strategic Management"
      ],
      skills: ["Product Management", "Strategic Planning", "Team Leadership", "Fundraising"],
      image: "👨‍💼" // Placeholder, can be replaced with actual image
    },
    {
      name: "Santosh Malla",
      role: "CTO & Co-Founder",
      expertise: "Full-Stack Development & AI/ML",
      background: "Senior Engineer with 10+ years in scalable financial systems",
      achievements: [
        "Led tech teams at Google and Microsoft",
        "Built payment systems processing ₹1000Cr+ annually",
        "Expert in AI-driven financial analytics"
      ],
      skills: ["System Architecture", "AI/ML", "Financial APIs", "Security"],
      image: "👨‍💻"
    },
    {
      name: "Bhuvanesh Jain",
      role: "Head of Financial Planning",
      expertise: "Investment Strategy & Wealth Management",
      background: "Certified Financial Planner with 12+ years advisory experience",
      achievements: [
        "Managed ₹500Cr+ in client assets",
        "Former VP at major wealth management firm",
        "CFA Charter holder and SEBI registered advisor"
      ],
      skills: ["Portfolio Management", "Risk Assessment", "Regulatory Compliance", "Client Relations"],
      image: "👩‍💼"
    }
  ];

  const advisors = [
    {
      name: "Industry Veteran",
      role: "Strategic Advisor",
      background: "Former CEO of leading fintech company",
      contribution: "Go-to-market strategy and investor relations"
    },
    {
      name: "Tech Leader",
      role: "Technical Advisor", 
      background: "Former CTO at unicorn startup",
      contribution: "Technology architecture and scaling guidance"
    },
    {
      name: "Financial Expert",
      role: "Domain Advisor",
      background: "20+ years in investment banking",
      contribution: "Financial product development and regulatory guidance"
    }
  ];

  const companyStats = [
    { value: "15+", label: "Team Size", description: "Engineering, Product & Business" },
    { value: "8+", label: "Years Combined Experience", description: "In fintech and financial services" },
    { value: "₹1000Cr+", label: "Prior Systems Built", description: "Transaction volume handled" },
    { value: "3", label: "Previous Exits", description: "Successful startup exits by team" }
  ];

  return (
    <section className="team-section section" data-section="team" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-secondary">
            World-Class Team
          </h2>
          <p className="text-large">
            Our founding team combines deep fintech expertise, proven track records, 
            and the vision to revolutionize personal finance management in India.
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="team-content">
          <motion.div
            className="core-team"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="subsection-title">Founding Team</h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-member-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="member-avatar">{member.image}</div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-expertise">{member.expertise}</p>
                    <p className="member-background">{member.background}</p>
                    
                    <div className="member-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {member.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="member-skills">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Statistics */}
          <motion.div
            className="team-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="subsection-title">Team Strength</h3>
            <div className="stats-grid">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advisory Board */}
          <motion.div
            className="advisors"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="subsection-title">Strategic Advisors</h3>
            <div className="advisors-grid">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  className="advisor-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <h4 className="advisor-name">{advisor.name}</h4>
                  <p className="advisor-role">{advisor.role}</p>
                  <p className="advisor-background">{advisor.background}</p>
                  <p className="advisor-contribution">{advisor.contribution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="team-conclusion"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="conclusion-card">
            <h3>Why This Team Wins</h3>
            <div className="winning-factors">
              <div className="factor">
                <div className="factor-icon">🎯</div>
                <h4>Proven Execution</h4>
                <p>Combined 20+ years of successful fintech product launches</p>
              </div>
              <div className="factor">
                <div className="factor-icon">🚀</div>
                <h4>Scale Experience</h4>
                <p>Built and managed systems serving millions of users</p>
              </div>
              <div className="factor">
                <div className="factor-icon">💡</div>
                <h4>Domain Expertise</h4>
                <p>Deep understanding of Indian financial ecosystem</p>
              </div>
              <div className="factor">
                <div className="factor-icon">🤝</div>
                <h4>Strong Network</h4>
                <p>Extensive connections in fintech, banking, and investor community</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 