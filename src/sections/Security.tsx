import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, CheckCircle, Star, Sparkles } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption protects all your data in transit and at rest.',
      details: ['End-to-end encryption', 'SOC 2 Type II certified', 'Regular security audits'],
      gradient: 'bg-gradient-electric',
      color: 'text-electric'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'Your financial data stays yours. We never sell or share your information.',
      details: ['GDPR compliant', 'Zero data selling', 'Privacy by design'],
      gradient: 'bg-gradient-neon',
      color: 'text-neon'
    },
    {
      icon: Eye,
      title: 'AI Transparency',
      description: 'Understand how our AI makes recommendations with clear explanations.',
      details: ['Explainable AI', 'Decision transparency', 'Algorithm auditing'],
      gradient: 'bg-gradient-sunset',
      color: 'text-sunset'
    },
    {
      icon: Users,
      title: 'Read-Only Access',
      description: 'We only read your account data. We never move or access your money.',
      details: ['View-only permissions', 'No transaction access', 'Bank partnerships'],
      gradient: 'bg-gradient-purple',
      color: 'text-purple-400'
    }
  ];



  const certifications = [
    { name: 'SOC 2 Type II', verified: true },
    { name: 'GDPR Compliant', verified: true },
    { name: 'PCI DSS', verified: true },
    { name: 'ISO 27001', verified: true },
    { name: 'CCPA Compliant', verified: true },
    { name: 'FERPA Compliant', verified: true }
  ];

  return (
    <section id="security" className="py-20 bg-startup relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sunset-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
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
            Security &
            <span className="text-gold"> Trust</span>
          </h2>
          <p className="text-xl text-chill max-w-2xl mx-auto">
            Your financial data deserves the highest level of protection. Here's how we keep it safe.
          </p>
        </motion.div>



        {/* Security Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="card-startup rounded-3xl p-8 hover-float group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${feature.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${feature.color} mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-chill leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-electric-500 rounded-full glow-startup"></div>
                      <span className="text-startup text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Badge */}
                <div className="mt-6 pt-6 border-t border-midnight-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-4 w-4 ${feature.color}`} />
                    <span className="text-xs font-medium text-electric">Verified & Active</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="card-startup rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-startup mb-3">
              Industry Certifications
            </h3>
            <p className="text-chill">
              Certified and compliant with the highest industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="card-startup rounded-xl p-4 text-center hover-float group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {cert.verified && (
                  <div className="mb-3">
                    <div className="bg-gradient-neon p-2 rounded-lg w-fit mx-auto group-hover:scale-110 transition-transform">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
                <div className="text-sm font-semibold text-startup mb-1">
                  {cert.name}
                </div>
                {cert.verified && (
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="h-3 w-3 text-neon" />
                    <span className="text-xs text-neon">Verified</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Transparency Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-startup rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-rainbow"></div>
            </div>

            <div className="relative z-10">
                          <div className="bg-gradient-gold p-4 rounded-2xl w-fit mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
              
              <h3 className="text-3xl font-bold text-startup mb-4">
                AI You Can
                <span className="text-electric"> Trust</span>
              </h3>
              
              <p className="text-lg text-chill mb-8 max-w-2xl mx-auto">
                Our AI is designed to be transparent, explainable, and always working in your best interest. 
                No black boxes, no hidden agendas.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Eye, title: 'Explainable', desc: 'Every recommendation comes with clear reasoning' },
                  { icon: Shield, title: 'Ethical', desc: 'Built with responsible AI principles' },
                  { icon: Users, title: 'Human-Centered', desc: 'AI augments, never replaces human judgment' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-neon p-3 rounded-xl w-fit mx-auto mb-3">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-startup mb-2">{item.title}</h4>
                      <p className="text-sm text-chill">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security; 