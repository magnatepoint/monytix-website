import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';
import './RevenueModelSection.css';

const RevenueModelSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const revenueStreams = [
    {
      title: "Subscription Revenue",
      percentage: "60%",
      description: "Monthly and annual subscriptions from premium users",
      value: "₹300Cr+ ARR Potential",
      icon: "💳"
    },
    {
      title: "Enterprise Licensing",
      percentage: "25%",
      description: "B2B licenses for corporate financial wellness programs",
      value: "₹125Cr+ ARR Potential",
      icon: "🏢"
    },
    {
      title: "Transaction Fees",
      percentage: "10%",
      description: "Small percentage on investment transactions and transfers",
      value: "₹50Cr+ ARR Potential",
      icon: "💱"
    },
    {
      title: "Data & Analytics",
      percentage: "5%",
      description: "Anonymized financial insights for financial institutions",
      value: "₹25Cr+ ARR Potential",
      icon: "📊"
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      type: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with personal finance",
      features: [
        "Basic budgeting tools",
        "Expense tracking",
        "Simple financial goals",
        "Limited investment insights",
        "Standard customer support"
      ],
      userLimit: "Individual users",
      isPopular: false,
      monthlyRevenue: "₹0 - Lead Generation"
    },
    {
      name: "Premium",
      type: "Individual",
      price: "₹299",
      period: "per month",
      description: "Advanced features for serious financial planning",
      features: [
        "Advanced budgeting & forecasting",
        "AI-powered investment recommendations", 
        "Unlimited financial goals",
        "Premium analytics dashboard",
        "Priority customer support",
        "Tax optimization tools",
        "Credit score monitoring"
      ],
      userLimit: "Single user account",
      isPopular: true,
      monthlyRevenue: "₹299 per user"
    },
    {
      name: "Family",
      type: "Multi-User",
      price: "₹499",
      period: "per month",
      description: "Comprehensive financial management for families",
      features: [
        "Everything in Premium",
        "Up to 5 family member accounts",
        "Shared budgets & goals",
        "Family financial planning",
        "Children's financial education",
        "Family expense sharing",
        "Estate planning tools"
      ],
      userLimit: "Up to 5 users",
      isPopular: false,
      monthlyRevenue: "₹499 per family"
    }
  ];

  const enterprisePlans = [
    {
      name: "Corporate Starter",
      employees: "50-200",
      price: "₹50",
      period: "per employee/month",
      features: [
        "Employee financial wellness program",
        "Basic financial literacy training",
        "Payroll integration",
        "Basic analytics dashboard",
        "Email support"
      ]
    },
    {
      name: "Enterprise",
      employees: "200-1000",
      price: "₹40",
      period: "per employee/month", 
      features: [
        "Everything in Corporate Starter",
        "Advanced analytics & reporting",
        "Custom financial wellness programs",
        "Dedicated customer success manager",
        "API integrations",
        "White-label options"
      ]
    },
    {
      name: "Enterprise Plus",
      employees: "1000+",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Everything in Enterprise",
        "Custom feature development",
        "On-premise deployment options",
        "Advanced security & compliance",
        "Dedicated technical support",
        "Multi-language support"
      ]
    }
  ];

  const marketProjections = [
    { year: "2024", users: "50K", revenue: "₹15Cr", growth: "" },
    { year: "2025", users: "200K", revenue: "₹80Cr", growth: "+433%" },
    { year: "2026", users: "500K", revenue: "₹250Cr", growth: "+213%" },
    { year: "2027", users: "1M+", revenue: "₹500Cr", growth: "+100%" }
  ];

  return (
    <section className="revenue-model-section section" data-section="revenue" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-secondary">
            Clear Revenue Model
          </h2>
          <p className="text-large">
            Multiple proven revenue streams designed for sustainable growth and 
            profitability in the Indian fintech market.
          </p>
        </motion.div>

        {/* Revenue Streams Overview */}
        <motion.div
          className="revenue-streams"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="subsection-title">Revenue Composition</h3>
          <div className="streams-grid">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                className="stream-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="stream-icon">{stream.icon}</div>
                <div className="stream-percentage">{stream.percentage}</div>
                <h4 className="stream-title">{stream.title}</h4>
                <p className="stream-description">{stream.description}</p>
                <div className="stream-value">{stream.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consumer Pricing */}
        <motion.div
          className="consumer-pricing"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="subsection-title">Consumer Pricing Strategy</h3>
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
              >
                {tier.isPopular && <div className="popular-badge">Most Popular</div>}
                <div className="tier-header">
                  <h4 className="tier-name">{tier.name}</h4>
                  <p className="tier-type">{tier.type}</p>
                  <div className="tier-price">
                    <span className="price">{tier.price}</span>
                    <span className="period">/{tier.period}</span>
                  </div>
                  <p className="tier-description">{tier.description}</p>
                </div>
                
                <div className="tier-features">
                  <ul>
                    {tier.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="tier-footer">
                  <div className="user-limit">{tier.userLimit}</div>
                  <div className="monthly-revenue">{tier.monthlyRevenue}</div>
                  <CTAButton 
                    variant={tier.isPopular ? "primary" : "outline"} 
                    size="medium"
                  >
                    {tier.type === "Free" ? "Get Started" : "Choose Plan"}
                  </CTAButton>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise Pricing */}
        <motion.div
          className="enterprise-pricing"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="subsection-title">Enterprise Solutions</h3>
          <div className="enterprise-grid">
            {enterprisePlans.map((plan, index) => (
              <motion.div
                key={index}
                className="enterprise-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h4 className="enterprise-name">{plan.name}</h4>
                <div className="enterprise-employees">{plan.employees} employees</div>
                <div className="enterprise-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="enterprise-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton variant="outline" size="small">
                  Contact Sales
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Projections */}
        <motion.div
          className="market-projections"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="subsection-title">Growth Projections</h3>
          <div className="projections-table">
            <div className="table-header">
              <div>Year</div>
              <div>Active Users</div>
              <div>Annual Revenue</div>
              <div>Growth Rate</div>
            </div>
            {marketProjections.map((projection, index) => (
              <motion.div
                key={index}
                className="table-row"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="year">{projection.year}</div>
                <div className="users">{projection.users}</div>
                <div className="revenue">{projection.revenue}</div>
                <div className={`growth ${projection.growth ? 'positive' : ''}`}>
                  {projection.growth || 'Baseline'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Summary */}
        <motion.div
          className="revenue-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="summary-card">
            <h3>Path to Profitability</h3>
            <p>
              With our diversified revenue model and proven pricing strategy, Monytix is 
              projected to achieve profitability by Q3 2025, with a clear path to 
              ₹500Cr+ ARR by 2027.
            </p>
            <div className="key-metrics">
              <div className="metric">
                <span className="metric-value">25%</span>
                <span className="metric-label">Expected EBITDA Margin</span>
              </div>
              <div className="metric">
                <span className="metric-value">₹1,200</span>
                <span className="metric-label">Average Revenue Per User</span>
              </div>
              <div className="metric">
                <span className="metric-value">18 Months</span>
                <span className="metric-label">Customer Payback Period</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModelSection; 