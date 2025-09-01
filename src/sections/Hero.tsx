import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Zap, Target, BarChart3, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" className="min-h-screen bg-startup relative overflow-hidden pt-20 md:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-sunset-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* LEFT SIDE - Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8 relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badges */}
          <motion.div className="flex flex-wrap gap-3 mb-8 justify-center">
            <motion.div
              className="inline-flex items-center space-x-1 card-startup rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-gold glow-startup"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl text-gold"
                animate={{ 
                  y: [-2, 2, -2],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ 
                  filter: 'brightness(1.5) contrast(1.5)',
                  fontSize: '1.5rem',
                  display: 'inline-block'
                }}
              >
                🚀
              </motion.span>
              <span className="text-gold">Patent Pending</span>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold font-display leading-tight text-startup mb-6 relative z-10"
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
            className="text-xl md:text-2xl text-chill leading-relaxed mb-8 max-w-3xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            🚀 Stop stressing about money! Our AI connects everything, 
            tracks spending, and gives you insights that make you go "wow, why didn't I know this before?"
          </motion.p>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="btn-startup px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              🚀 Start Your Journey
            </motion.button>
            <motion.button
              className="btn-ghost-startup px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('interactive')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              📊 See Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Interactive Dashboard */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <div className="relative w-full max-w-md">
            {/* Main Dashboard Card */}
            <motion.div
              className="card-startup rounded-3xl p-4 md:p-5 lg:p-6 shadow-2xl hover-float relative z-10"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                duration: 0.8,
                delay: 0.2
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                <motion.div 
                  className="bg-gradient-electric text-white rounded-2xl p-4 text-center"
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-2xl font-bold mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    ₹
                  </motion.div>
                  <motion.div 
                    className="text-lg font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    6.8L
                  </motion.div>
                  <div className="text-xs opacity-80">This Month</div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-neon text-white rounded-2xl p-4 text-center"
                  initial={{ opacity: 0, x: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Target className="h-6 w-6 mx-auto mb-2" />
                  </motion.div>
                  <motion.div 
                    className="text-lg font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    89%
                  </motion.div>
                  <div className="text-xs opacity-80">Goals Hit</div>
                </motion.div>
              </div>

              {/* Interactive Chart */}
              <motion.div 
                className="bg-midnight-800/30 rounded-2xl p-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-chill">Weekly Spending</span>
                  <motion.div
                    initial={{ opacity: 0, rotate: 90 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <BarChart3 className="h-4 w-4 text-electric-400" />
                  </motion.div>
                </div>
                <div className="flex items-end justify-between h-16 space-x-1">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-electric rounded-t-sm flex-1"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ 
                        height: `${height}%`,
                        opacity: 1
                      }}
                      transition={{ 
                        delay: i * 0.1 + 0.8, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        opacity: 0.8,
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="flex-1 btn-startup py-2 text-sm animate-startup-pulse"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255, 165, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  ✨ Optimize
                </motion.button>
                <motion.button 
                  className="flex-1 btn-ghost-startup py-2 text-sm"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 165, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    document.getElementById('interactive')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  📊 Analyze
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Floating Elements with Enhanced Micro-interactions */}
            
            {/* Top Right - Sparkle Element */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-neon text-white rounded-full p-4 shadow-lg z-20 hidden md:block cursor-pointer"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: 180,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Zap className="h-5 w-5" />
            </motion.div>

            {/* Bottom Left - Savings Badge */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-gradient-sunset text-white rounded-2xl p-4 shadow-lg z-20 hidden md:block cursor-pointer"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.1,
                y: -15,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-lg font-bold">+₹2,03,000</div>
              <div className="text-xs opacity-80">Saved this month</div>
            </motion.div>

            {/* Top Left - AI Brain */}
            <motion.div
              className="absolute -top-4 -left-4 bg-gradient-purple text-white rounded-full p-3 shadow-lg z-20 hidden md:block cursor-pointer"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="text-xl">🧠</div>
            </motion.div>

            {/* Bottom Right - Growth Chart */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-electric text-white rounded-xl p-3 shadow-lg z-20 hidden md:block cursor-pointer"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.2,
                y: -12,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <TrendingUp className="h-4 w-4" />
            </motion.div>

            {/* Center Top - Floating Notification */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-white rounded-full px-4 py-2 shadow-lg z-20 hidden md:block"
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.1,
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-sm font-semibold">✨ AI Powered</div>
            </motion.div>

            {/* Data Points - Scattered around dashboard */}
            <motion.div
              className="absolute top-1/4 -right-2 bg-electric-500/20 rounded-full w-3 h-3 z-10 hidden md:block"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 -left-2 bg-neon-500/20 rounded-full w-2 h-2 z-10 hidden md:block"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 bg-sunset-500/20 rounded-full w-4 h-4 z-10 hidden md:block"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 