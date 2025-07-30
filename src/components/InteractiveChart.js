import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackChartInteraction, trackUserInteraction } from './AnalyticsSetup';
import './InteractiveChart.css';

const InteractiveChart = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({
    shopping: 0,
    rent: 0,
    entertainment: 0
  });

  const categories = {
    shopping: { amount: 12082.08, color: '#3b82f6', percentage: 35 },
    rent: { amount: 17000, color: '#f97316', percentage: 50 },
    entertainment: { amount: 3882.03, color: '#8b5cf6', percentage: 15 }
  };

  const barData = [
    { day: 'Oct 22', amount: 2400, height: 40 },
    { day: 'Oct 23', amount: 3200, height: 45 },
    { day: 'Oct 24', amount: 1800, height: 38 },
    { day: 'Oct 25', amount: 4200, height: 50 },
    { day: 'Oct 26', amount: 5600, height: 85 },
    { day: 'Oct 27', amount: 1500, height: 35 },
    { day: 'Oct 28', amount: 2800, height: 42 }
  ];

  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    // Animate values on mount
    const timer = setTimeout(() => {
      setAnimatedValues({
        shopping: categories.shopping.amount,
        rent: categories.rent.amount,
        entertainment: categories.entertainment.amount
      });
    }, 500);

    // Track chart load
    trackChartInteraction('prototype_dashboard', 'loaded');

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (category) => {
    const newSelection = selectedCategory === category ? null : category;
    setSelectedCategory(newSelection);
    
    // Track pie chart interaction
    trackChartInteraction('prototype_pie_chart', newSelection ? `selected_${category}` : 'deselected');
    trackUserInteraction('prototype_demo', `pie_segment_${category}`);
  };

  const handleBarHover = (index) => {
    setHoveredBar(index);
    
    // Track bar chart hover (but not too frequently)
    if (index !== null && hoveredBar === null) {
      trackChartInteraction('prototype_bar_chart', `hovered_day_${index + 1}`);
      trackUserInteraction('prototype_demo', `bar_${barData[index].day}`);
    }
  };

  return (
    <div className="interactive-chart">
      {/* Pie Chart Section */}
      <div className="pie-chart-section">
        <h4 className="chart-title">Spending Breakdown (Demo)</h4>
        <div className="pie-chart-container">
          <motion.div 
            className="pie-chart-interactive"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {Object.entries(categories).map(([key, data], index) => (
              <motion.div
                key={key}
                className={`pie-segment pie-${key} ${selectedCategory === key ? 'selected' : ''}`}
                style={{
                  '--color': data.color,
                  '--percentage': data.percentage
                }}
                onClick={() => handleCategoryClick(key)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              />
            ))}
          </motion.div>
          
          <div className="pie-legend">
            {Object.entries(categories).map(([key, data]) => (
              <motion.div
                key={key}
                className={`legend-item ${selectedCategory === key ? 'selected' : ''}`}
                onClick={() => handleCategoryClick(key)}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div 
                  className="legend-color" 
                  style={{ backgroundColor: data.color }}
                />
                <span className="legend-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <motion.span 
                  className="legend-amount"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  ₹{animatedValues[key].toLocaleString()}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              className="category-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h5>
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Analysis (Prototype)
              </h5>
              <div className="detail-stats">
                <div className="detail-item">
                  <span>Sample Amount:</span>
                  <span>₹{categories[selectedCategory].amount.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span>Percentage:</span>
                  <span>{categories[selectedCategory].percentage}%</span>
                </div>
                <div className="detail-item">
                  <span>Projected Trend:</span>
                  <span className="trend-up">↗ +12%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bar Chart Section */}
      <div className="bar-chart-section">
        <h4 className="chart-title">Daily Spending (Demo)</h4>
        <div className="bar-chart-interactive">
          <div className="bars-container">
            {barData.map((bar, index) => (
              <div key={index} className="bar-wrapper">
                <motion.div
                  className={`bar-interactive ${hoveredBar === index ? 'hovered' : ''}`}
                  style={{ '--height': `${bar.height}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.height}%` }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  onMouseEnter={() => handleBarHover(index)}
                  onMouseLeave={() => handleBarHover(null)}
                  whileHover={{ scale: 1.1 }}
                />
                
                <AnimatePresence>
                  {hoveredBar === index && (
                    <motion.div
                      className="bar-tooltip"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-day">{bar.day}</div>
                        <div className="tooltip-amount">₹{bar.amount.toLocaleString()}</div>
                        <div className="tooltip-note">Sample Data</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="bar-labels">
            {barData.map((bar, index) => (
              <motion.span
                key={index}
                className="bar-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                {bar.day.split(' ')[1]}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChart; 