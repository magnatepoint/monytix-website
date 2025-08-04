import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Zap, DollarSign, Target, BarChart3, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" className="min-h-screen bg-startup relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-sunset-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* LEFT SIDE - Interactive Dashboard */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <div className="relative w-full max-w-md">
            {/* Main Dashboard Card */}
            <motion.div
              className="card-startup rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl hover-float relative z-10"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                                  <div className="flex items-center space-x-3">
                  <div className="bg-gradient-gold p-2 rounded-xl animate-startup-pulse">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-startup">AI Dashboard</h3>
                    <p className="text-xs text-chill">Live Preview</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rainbow">₹39,75,000</div>
                  <div className="text-xs text-electric-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5%
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-gradient-electric text-white rounded-2xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <DollarSign className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">₹6.8L</div>
                  <div className="text-xs opacity-80">This Month</div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-neon text-white rounded-2xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">89%</div>
                  <div className="text-xs opacity-80">Goals Hit</div>
                </motion.div>
              </div>

              {/* Interactive Chart */}
              <div className="bg-midnight-800/30 rounded-2xl p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-chill">Weekly Spending</span>
                  <BarChart3 className="h-4 w-4 text-electric-400" />
                </div>
                <div className="flex items-end justify-between h-16 space-x-1">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-electric rounded-t-sm flex-1"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ opacity: 0.8 }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 btn-startup py-2 text-sm animate-startup-pulse">
                  ✨ Optimize
                </button>
                <button className="flex-1 btn-ghost-startup py-2 text-sm">
                  📊 Analyze
                </button>
              </div>
            </motion.div>

            {/* Floating Elements - Hidden on mobile to prevent overlap */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-neon text-white rounded-full p-3 shadow-lg z-20 hidden md:block"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Zap className="h-4 w-4" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-sunset text-white rounded-2xl p-4 shadow-lg z-20 hidden md:block"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                              <div className="text-lg font-bold">+₹2,03,000</div>
              <div className="text-xs opacity-80">Saved this month</div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:p-12 relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}


          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight text-startup mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Money
            <br />
            <span className="text-gold wiggle-on-hover block">
              Simplified
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-chill leading-relaxed mb-8 max-w-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            🚀 Stop stressing about money! Our AI connects everything, 
            tracks spending, and gives you insights that make you go "wow, why didn't I know this before?"
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >





          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 