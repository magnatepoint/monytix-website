import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Sparkles, ArrowRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Security', href: '#security' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '/api' },
      { name: 'Integrations', href: '/integrations' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Financial Education', href: '/learn' },
      { name: 'Community', href: '/community' },
      { name: 'Webinars', href: '/webinars' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', gradient: 'bg-gradient-electric' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', gradient: 'bg-gradient-neon' },
    { icon: Github, href: '#', label: 'GitHub', gradient: 'bg-gradient-sunset' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@monytix.com', href: 'mailto:hello@monytix.com' },
    { icon: Phone, text: '+91 9603113333', href: 'tel:+919603113333' },
    { icon: MapPin, text: 'Hyderabad, India', href: '#' }
  ];

  return (
    <footer className="bg-startup relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="py-16 border-b border-midnight-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-startup rounded-3xl p-12 text-center">
            <div className="bg-gradient-gold p-4 rounded-2xl w-fit mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-startup mb-4">
                          Stay in the
            <span className="text-gold"> Loop</span>
            </h3>
            
            <p className="text-lg text-chill mb-8 max-w-2xl mx-auto">
              Get the latest updates on new features, financial tips, and exclusive insights 
              delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-midnight-800 border border-midnight-600 rounded-xl text-startup placeholder-chill focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
              />
              <motion.button
                className="btn-startup px-6 py-3 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-electric p-3 rounded-2xl">
                    <img src="/monytix_logo.png" alt="MONYTIX Logo" className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-startup">MONYTIX</h3>
                    <p className="text-sm text-electric font-medium">Powered by MOLYTIX AI</p>
                  </div>
                </div>

                <p className="text-chill mb-6 leading-relaxed">
                  Making advanced financial AI accessible to everyone. Join thousands who've 
                  already transformed their financial future with intelligent insights.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-chill hover:text-electric transition-colors group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-electric transition-colors" />
                        <span className="text-sm">{contact.text}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], sectionIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold text-startup mb-6 capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-chill hover:text-electric transition-colors text-sm block"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-midnight-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-chill text-sm">
                © 2024 MONYTIX. All rights reserved.
              </p>
              <p className="text-chill text-xs mt-1 flex items-center justify-center md:justify-start space-x-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-electric fill-current" />
                <span>in Hyderabad, India</span>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-chill text-sm hidden sm:block">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`${social.gradient} p-3 rounded-xl hover-float group`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="py-8 border-t border-midnight-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-50">
            {['SOC 2', 'GDPR', 'PCI DSS', 'ISO 27001'].map((cert, index) => (
              <motion.div
                key={cert}
                className="card-startup rounded-lg px-4 py-2 text-xs font-medium text-chill"
                whileHover={{ scale: 1.05, opacity: 1 }}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                {cert} Compliant
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 