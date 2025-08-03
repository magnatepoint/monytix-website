import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Target, DollarSign, PieChart, ArrowRight, Sparkles } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('roi');
  const [income, setIncome] = useState(75000);
  const [expenses, setExpenses] = useState(50000);
  const [savingsGoal, setSavingsGoal] = useState(500000);

  const demos = [
    {
      id: 'roi',
      name: 'ROI Calculator',
      icon: Calculator,
      description: 'See how much you could save using MONYTIX',
      gradient: 'bg-gradient-electric'
    },
    {
      id: 'budget',
      name: 'Smart Budget Planner',
      icon: PieChart,
      description: 'Try our AI-powered budget planning with demo data',
      gradient: 'bg-gradient-neon'
    },
    {
      id: 'projections',
      name: 'Financial Projections',
      icon: TrendingUp,
      description: 'Interactive sliders to explore your financial future',
      gradient: 'bg-gradient-sunset'
    }
  ];

  const calculateROI = () => {
    const monthlyProfit = income - expenses;
    const yearlySavings = monthlyProfit * 12 * 0.15; // 15% improvement with MONYTIX
    const timeToGoal = savingsGoal / (monthlyProfit * 1.15);
    return { yearlySavings, timeToGoal: Math.ceil(timeToGoal) };
  };

  const { yearlySavings, timeToGoal } = calculateROI();

  const renderDemo = () => {
    switch (activeDemo) {
      case 'roi':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-chill mb-2">
                    Monthly Income: ₹{income.toLocaleString()}
                  </label>
                  <input
                    type="range"
                                                                min="30000"
                      max="300000"
                      step="5000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full h-2 bg-midnight-700 rounded-lg appearance-none cursor-pointer slider-startup"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-chill mb-2">
                    Monthly Expenses: ₹{expenses.toLocaleString()}
                  </label>
                  <input
                    type="range"
                                                                min="20000"
                      max="200000"
                      step="2500"
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full h-2 bg-midnight-700 rounded-lg appearance-none cursor-pointer slider-startup"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-chill mb-2">
                    Savings Goal: ₹{savingsGoal.toLocaleString()}
                  </label>
                  <input
                    type="range"
                                          min="50000"
                      max="5000000"
                      step="25000"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(Number(e.target.value))}
                    className="w-full h-2 bg-midnight-700 rounded-lg appearance-none cursor-pointer slider-startup"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="card-startup rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-electric p-3 rounded-xl w-fit mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-electric mb-2">
                    ₹{Math.round(yearlySavings).toLocaleString()}
                  </div>
                  <div className="text-sm text-chill">Potential Annual Savings</div>
                </motion.div>
                
                <motion.div 
                  className="card-startup rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-neon p-3 rounded-xl w-fit mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-neon mb-2">
                    {timeToGoal} months
                  </div>
                  <div className="text-sm text-chill">Time to reach your goal</div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      
      case 'budget':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-startup mb-4">AI Budget Recommendations</h3>
              {[
                { category: 'Housing', current: 35, recommended: 30, savings: '₹20,750' },
                { category: 'Food', current: 18, recommended: 15, savings: '₹12,450' },
                { category: 'Transportation', current: 15, recommended: 12, savings: '₹9,960' },
                { category: 'Entertainment', current: 12, recommended: 8, savings: '₹16,600' }
              ].map((item, index) => (
                <motion.div
                  key={item.category}
                  className="card-startup rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-startup">{item.category}</span>
                    <span className="text-sm text-electric font-medium">Save {item.savings}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-midnight-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-electric h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.recommended}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-chill">{item.recommended}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="card-startup rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-startup mb-4">Monthly Savings Potential</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric mb-2">₹59,760</div>
                  <div className="text-sm text-chill">Total Monthly Savings</div>
                </div>
                <div className="bg-gradient-electric p-4 rounded-xl text-white text-center">
                  <div className="text-lg font-semibold mb-1">₹7,17,120</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'projections':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: '1 Year', value: '₹10.4L', growth: '+15%', color: 'text-electric' },
                { label: '3 Years', value: '₹37.5L', growth: '+25%', color: 'text-neon' },
                { label: '5 Years', value: '₹74.5L', growth: '+35%', color: 'text-sunset' }
              ].map((projection, index) => (
                <motion.div
                  key={projection.label}
                  className="card-startup rounded-xl p-6 text-center hover-float"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-sm text-chill mb-2">{projection.label}</div>
                  <div className={`text-2xl font-bold ${projection.color} mb-1`}>{projection.value}</div>
                  <div className="text-sm text-neon">{projection.growth}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="card-startup rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-startup mb-4">Financial Growth Trajectory</h3>
              <div className="relative h-32 bg-midnight-800 rounded-lg p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 via-neon-500/20 to-sunset-500/20"></div>
                <div className="relative z-10 flex items-end justify-between h-full">
                  {[20, 35, 45, 60, 75, 85].map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-electric rounded-t w-8"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="interactive" className="py-20 bg-startup relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-electric-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-startup mb-6">
            Try MONYTIX
            <span className="text-gold"> Interactive</span>
          </h2>
          <p className="text-xl text-chill max-w-2xl mx-auto">
            Experience the power of AI-driven financial insights with our interactive demos
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {demos.map((demo, index) => {
            const IconComponent = demo.icon;
            const isActive = activeDemo === demo.id;
            
            return (
              <motion.button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'card-startup ring-2 ring-electric-500/50 glow-startup'
                    : 'card-startup hover:ring-1 hover:ring-electric-500/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-2 rounded-lg ${isActive ? demo.gradient : 'bg-midnight-700'}`}>
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-electric'}`} />
                </div>
                <div className="text-left">
                  <div className={`font-semibold ${isActive ? 'text-electric' : 'text-startup'}`}>
                    {demo.name}
                  </div>
                  <div className="text-sm text-chill hidden sm:block">
                    {demo.description}
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto"
                  >
                    <Sparkles className="h-4 w-4 text-electric animate-startup-pulse" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Demo Content */}
        <motion.div
          className="card-startup rounded-3xl p-8 shadow-2xl"
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderDemo()}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-startup inline-flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started for Free</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo; 