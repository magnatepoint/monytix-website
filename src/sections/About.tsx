import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap, Award, TrendingUp, Shield, ArrowRight, Sparkles, Building, Globe, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs VP with 10+ years in fintech. Passionate about democratizing financial intelligence.',
      image: '👨‍💼',
      linkedin: '#',
      twitter: '#',
      gradient: 'bg-gradient-electric'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher. Led ML teams at Scale AI. Building the future of financial AI.',
      image: '👩‍💻',
      linkedin: '#',
      twitter: '#',
      gradient: 'bg-gradient-neon'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      bio: 'Former Mint product lead. Design thinking meets financial wellness to create delightful experiences.',
      image: '👨‍🎨',
      linkedin: '#',
      twitter: '#',
      gradient: 'bg-gradient-sunset'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning from MIT. Published researcher in algorithmic transparency and ethical AI.',
      image: '👩‍🔬',
      linkedin: '#',
      twitter: '#',
      gradient: 'bg-gradient-purple'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'User-First',
      description: 'Every decision we make is driven by what\'s best for our users\' financial wellbeing.',
      gradient: 'bg-gradient-electric',
      color: 'text-electric'
    },
    {
      icon: Zap,
      title: 'AI Transparency',
      description: 'We believe AI should be explainable, auditable, and serve humanity, not replace it.',
      gradient: 'bg-gradient-neon',
      color: 'text-neon'
    },
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'Your data is yours. We protect it like it\'s our own family\'s financial information.',
      gradient: 'bg-gradient-sunset',
      color: 'text-sunset'
    },
    {
      icon: Target,
      title: 'Financial Inclusion',
      description: 'Making advanced financial tools accessible to everyone, regardless of income or background.',
      gradient: 'bg-gradient-purple',
      color: 'text-purple-400'
    }
  ];

  const metrics = [
    { value: '50K+', label: 'Active Users', icon: Users, color: 'text-electric' },
    { value: '₹20.7Cr+', label: 'Money Saved', icon: TrendingUp, color: 'text-neon' },
    { value: '99.9%', label: 'Uptime', icon: Zap, color: 'text-sunset' },
    { value: '4.9/5', label: 'User Rating', icon: Award, color: 'text-purple-400' }
  ];

  const milestones = [
    { year: '2023', event: 'Founded MONYTIX', description: 'Started with a vision to democratize financial AI', icon: Rocket },
    { year: '2023', event: 'Seed Funding', description: 'Raised ₹16.6Cr to build our AI engine', icon: TrendingUp },
    { year: '2024', event: 'Beta Launch', description: 'Launched with 1,000 beta users', icon: Users },
    { year: '2024', event: 'Series A', description: 'Expanded team and accelerated growth', icon: Building }
  ];

  return (
    <section id="about" className="py-20 bg-startup relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-neon-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
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
            About
            <span className="text-gold"> MONYTIX</span>
          </h2>
          <p className="text-xl text-chill max-w-3xl mx-auto">
            We're on a mission to make advanced financial AI accessible to everyone. 
            Your financial success is our obsession.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="card-startup rounded-2xl p-6 text-center hover-float group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-electric p-3 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-chill">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="card-startup rounded-3xl p-12 mb-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-rainbow"></div>
          </div>

          <div className="relative z-10">
            <div className="bg-gradient-gold p-4 rounded-2xl w-fit mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-startup mb-6">
              Our
              <span className="text-electric"> Mission</span>
            </h3>
            
            <p className="text-lg text-chill mb-8 max-w-3xl mx-auto leading-relaxed">
              Financial inequality starts with access to information. While the wealthy have teams of advisors 
              and AI-powered tools, most people manage their money with basic spreadsheets and gut feelings. 
              We're here to change that.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Heart, title: 'Democratize', desc: 'Make advanced financial tools accessible to everyone' },
                { icon: Zap, title: 'Empower', desc: 'Give you the insights the wealthy have always had' },
                { icon: Shield, title: 'Protect', desc: 'Keep your financial data safe and private' }
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
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-startup mb-4">
              Our
              <span className="text-electric"> Values</span>
            </h3>
            <p className="text-chill max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="card-startup rounded-3xl p-8 hover-float group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${value.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold ${value.color} mb-3`}>
                        {value.title}
                      </h4>
                      <p className="text-chill leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-startup mb-4">
              Meet the
              <span className="text-electric"> Team</span>
            </h3>
            <p className="text-chill max-w-2xl mx-auto">
              Experienced founders and builders who understand both technology and finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="card-startup rounded-3xl p-6 text-center hover-float group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${member.gradient} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-2xl">{member.image}</div>
                </div>
                
                <h4 className="font-bold text-startup mb-1">{member.name}</h4>
                <div className="text-sm text-electric font-medium mb-3">{member.role}</div>
                <p className="text-xs text-chill leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-chill hover:text-electric transition-colors">
                    <Users className="h-4 w-4" />
                  </a>
                  <a href={member.twitter} className="text-chill hover:text-electric transition-colors">
                    <Zap className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-startup mb-4">
              Our
              <span className="text-electric"> Journey</span>
            </h3>
            <p className="text-chill max-w-2xl mx-auto">
              From idea to helping thousands of people take control of their finances
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-electric rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="card-startup rounded-2xl p-6 hover-float">
                        <div className="text-electric font-bold text-lg mb-2">{milestone.year}</div>
                        <h4 className="font-bold text-startup mb-2">{milestone.event}</h4>
                        <p className="text-chill text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="bg-gradient-electric p-3 rounded-full shadow-lg glow-startup">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card-startup rounded-3xl p-12">
            <div className="bg-gradient-gold p-4 rounded-2xl w-fit mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-startup mb-4">
              Join Our
              <span className="text-electric"> Mission</span>
            </h3>
            
            <p className="text-lg text-chill mb-8 max-w-2xl mx-auto">
              Ready to experience financial intelligence designed for everyone? 
              Join thousands who've already transformed their financial future.
            </p>

            <motion.button
              className="btn-startup inline-flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Financial Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 