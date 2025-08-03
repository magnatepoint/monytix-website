import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Home, Grid3X3, Sparkles, Shield, Users, Mail, ArrowUp } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      const sections = ['home', 'features', 'interactive', 'security', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: Home, href: '#home' },
    { id: 'features', name: 'Features', icon: Grid3X3, href: '#features' },
    { id: 'interactive', name: 'Demo', icon: Sparkles, href: '#interactive' },
    { id: 'security', name: 'Security', icon: Shield, href: '#security' },
    { id: 'about', name: 'About', icon: Users, href: '#about' },
    { id: 'contact', name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'card-startup shadow-xl backdrop-blur-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-gradient-electric p-2 rounded-xl"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(6, 182, 212, 0.4)',
                    '0 0 0 20px rgba(6, 182, 212, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold text-rainbow wiggle-on-hover"
                  whileHover={{ scale: 1.1 }}
                >
                  MONYTIX
                </motion.span>
                <span className="text-xs text-chill -mt-1">powered by MOLYTIX</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-electric text-white shadow-lg'
                      : 'text-startup hover:text-electric hover:bg-electric-500/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="w-1 h-1 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button 
                className="btn-startup wiggle-on-hover px-6 py-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Go! 🚀
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-xl bg-midnight-800/50 text-electric-400"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-midnight-950/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative card-startup rounded-3xl m-4 mt-20 p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-electric text-white shadow-lg'
                        : 'text-startup hover:bg-electric-500/10 hover:text-electric'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div 
                className="mt-8 pt-6 border-t border-electric-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button className="w-full btn-startup py-4 text-lg">
                  Let's Go! 🚀
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll Progress */}
      {scrolled && (
        <motion.div
          className="fixed top-20 right-6 z-40 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card-startup rounded-2xl p-4 shadow-lg">
            <div className="space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-electric text-white shadow-md scale-110'
                      : 'text-electric-400 hover:bg-electric-500/10'
                  }`}
                  whileHover={{ scale: activeSection === item.id ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-4 w-4" />
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'bg-white' : 'bg-electric-500/30'
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 btn-startup p-4 rounded-full shadow-lg hover-float"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 