import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '../data/features.ts';
import { Feature } from '../types/index';
import * as Icons from 'lucide-react';
import { Search, Grid, List, Sparkles, Building2, User, Eye, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('grid');
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  // Business features data
  const businessFeatures: Feature[] = [
    {
      id: 'bizboard',
      name: 'BizBoard',
      tagline: 'Your centralized business financial dashboard',
      description: 'One place to see cash flow, revenues, expenses, and account balances in real time — AI-powered dashboards tailored for founders and finance heads.',
      icon: 'LayoutDashboard',
      color: 'from-blue-500 to-indigo-600',
      category: 'core',
      features: [
        'Real-time cash position monitoring',
        'Inflow and outflow tracking',
        'Account balance aggregation',
        'Burn rate calculation',
        'AI-powered financial dashboards'
      ]
    },
    {
      id: 'bizbudget',
      name: 'BizBudget',
      tagline: 'Set operational budgets across departments, let AI keep you on track.',
      description: 'Set monthly budgets across departments (SaaS, travel, payroll), track actual vs planned, and receive AI nudges when overspending.',
      icon: 'PieChart',
      color: 'from-green-500 to-emerald-600',
      category: 'planning',
      features: [
        'Department budget setting',
        'Actual vs planned tracking',
        'AI overspending alerts',
        'SaaS expense monitoring',
        'Travel and payroll budgets'
      ]
    },
    {
      id: 'bizspend',
      name: 'bizSpend',
      tagline: 'Track and categorize every business expense automatically',
      description: 'Automatically categorize vendor payouts, SaaS tools, salaries, etc. Spot cost centers and optimize vendor spend.',
      icon: 'TrendingUp',
      color: 'from-orange-500 to-red-600',
      category: 'insights',
      features: [
        'Automatic expense categorization',
        'Vendor payout tracking',
        'SaaS tools monitoring',
        'Cost center identification',
        'Vendor spend optimization'
      ]
    },
    {
      id: 'bizreserve',
      name: 'BizReserve',
      tagline: 'Plan and track financial reserves with smart funding suggestions.',
      description: 'Create business reserves for payroll, taxes, rainy days. Get suggestions on ideal reserve size and savings strategy.',
      icon: 'Target',
      color: 'from-purple-500 to-violet-600',
      category: 'planning',
      features: [
        'Financial reserve planning',
        'Tax reserve tracking',
        'Payroll reserve management',
        'Emergency fund setup',
        'Smart funding suggestions'
      ]
    },
    {
      id: 'bizlearn',
      name: 'BizLearn',
      tagline: 'Short, visual lessons,simplified for business owners.',
      description: 'Short, visual lessons on working capital, compliance, pricing, burn rate, and funding — simplified for business owners.',
      icon: 'GraduationCap',
      color: 'from-gold-400 to-gold-600',
      category: 'engagement',
      features: [
        'Working capital lessons',
        'Compliance education',
        'Pricing strategy insights',
        'Burn rate understanding',
        'Funding guidance'
      ]
    },
    {
      id: 'bizforecast',
      name: 'BizForecast',
      tagline: 'Forecast cash flow, runway, and future spend',
      description: 'AI-driven cash flow projections, revenue modeling, and runway calculators. Play out what-if scenarios like raising capital or hiring.',
      icon: 'Zap',
      color: 'from-gold-500 to-gold-600',
      category: 'planning',
      features: [
        'Cash flow forecasting',
        'Runway calculation',
        'What-if scenario modeling',
        'Revenue projections',
        'Hiring impact analysis'
      ]
    },
    {
      id: 'bizpulse',
      name: 'BizPulse',
      tagline: 'AI-powered behavioral nudges',
      description: 'Personalized nudges like: "Pay GST by 20th," or "Rent has increased 20% vs last quarter." AI monitors and reminds you.',
      icon: 'Bell',
      color: 'from-yellow-500 to-orange-600',
      category: 'engagement',
      features: [
        'Spend anomaly alerts',
        'Tax deadline reminders',
        'Vendor payment notifications',
        'Behavioral habit tracking',
        'Personalized AI nudges'
      ]
    },
    {
      id: 'bizgoals',
      name: 'BizGoals',
      tagline: 'Set financial goals and track progress visually.',
      description: 'Define goals like "₹10L in monthly revenue" or "cut SaaS spend by 15%." Visual goal tracking and alerts help teams stay aligned.',
      icon: 'Compass',
      color: 'from-emerald-500 to-green-600',
      category: 'planning',
      features: [
        'Revenue milestone tracking',
        'Cost reduction targets',
        'Funding objectives',
        'Visual progress tracking',
        'Team alignment alerts'
      ]
    },
    {
      id: 'bizinsight',
      name: 'BizInsight',
      tagline: 'AI-generated narrative insights from your data',
      description: 'Narrative insights on sales trends, top vendors, high spend areas, or seasonality. AI turns raw data into business advice.',
      icon: 'Brain',
      color: 'from-violet-500 to-purple-600',
      category: 'insights',
      features: [
        'Spend pattern analysis',
        'Vendor shift insights',
        'Seasonality detection',
        'Sales trend analysis',
        'AI-generated narratives'
      ]
    },
    {
      id: 'bizrewards',
      name: 'BizRewards',
      tagline: 'Earn rewards',
      description: 'Unlock benefits (like cashback on tools or credit offers) when you manage cash flow well or maintain strong reserves.',
      icon: 'Gift',
      color: 'from-pink-500 to-rose-600',
      category: 'engagement',
      features: [
        'Cashback rewards',
        'SaaS credit offers',
        'Funding opportunities',
        'Reserve maintenance rewards',
        'Budget management benefits'
      ]
    },
    {
      id: 'bizvision',
      name: 'BizVision',
      tagline: 'Plan your long-term exit strategy',
      description: 'For founders: visualize exit strategies, profit goals, investor payouts, and long-term financial strategy.',
      icon: 'Eye',
      color: 'from-gold-400 to-gold-700',
      category: 'planning',
      features: [
        'Exit strategy planning',
        'Founder equity visualization',
        'Investor return modeling',
        'Profit target setting',
        'Long-term strategy planning'
      ]
    },
    {
      id: 'molybot-business',
      name: 'MolyBot',
      tagline: 'Conversational AI for business finances',
      description: 'Ask: "What\'s my burn rate?", "How much did I pay Razorpay last month?" or "Show me biggest expenses this quarter."',
      icon: 'MessageCircle',
      color: 'from-gold-300 to-gold-800',
      category: 'core',
      features: [
        'Burn rate queries',
        'Tax deadline questions',
        'SaaS spend analysis',
        'Vendor payment tracking',
        'Expense trend reporting'
      ]
    },
    {
      id: 'benchmarkiq',
      name: 'BenchMarkIQ',
      tagline: 'Compare your business',
      description: 'Compare your business expenses, revenue ratios, or vendor costs against similar companies in your industry or size.',
      icon: 'BarChart3',
      color: 'from-teal-500 to-cyan-600',
      category: 'insights',
      features: [
        'Industry benchmarking',
        'Revenue ratio comparison',
        'Vendor cost analysis',
        'Peer company insights',
        'Performance metrics'
      ]
    }
  ];

  // Get features based on active tab
  const currentFeatures = useMemo(() => {
    return activeTab === 'personal' ? features : businessFeatures;
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // Get actual categories from the current features data
  const categories = useMemo(() => {
    const currentFeaturesData = activeTab === 'personal' ? features : businessFeatures;
    return [
      { id: 'all', name: 'All Features', icon: Grid, count: currentFeaturesData.length },
      { id: 'core', name: 'Core Tools', icon: Sparkles, count: currentFeaturesData.filter(f => f.category === 'core').length },
      { id: 'planning', name: 'Planning', icon: Icons.Target, count: currentFeaturesData.filter(f => f.category === 'planning').length },
      { id: 'insights', name: 'AI Insights', icon: Icons.Brain, count: currentFeaturesData.filter(f => f.category === 'insights').length },
      { id: 'engagement', name: 'Engagement', icon: Icons.Heart, count: currentFeaturesData.filter(f => f.category === 'engagement').length }
    ];
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // Filter features based on category and search
  const filteredFeatures = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? currentFeatures 
      : currentFeatures.filter(feature => feature.category === selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(feature =>
        feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm, currentFeatures]);

  // Improved Bento layout with better consistency
  const getBentoLayout = (index: number, total: number) => {
    // Create a more predictable pattern
    const patterns = [
      'col-span-2 row-span-2', // Large featured (every 4th item)
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-1', // Small
      'col-span-2 row-span-1', // Wide
    ];
    return patterns[index % patterns.length];
  };

  const FeatureCard: React.FC<{ 
    feature: Feature; 
    index: number; 
    layout: string; 
    viewMode: 'bento' | 'grid' 
  }> = ({ feature, index, layout, viewMode }) => {
    const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;
    const isLarge = viewMode === 'bento' && (layout.includes('col-span-2') || layout.includes('row-span-2'));
    
    // Map feature colors to gradient classes
    const getGradientClass = (colorString: string) => {
      if (colorString.includes('blue') || colorString.includes('indigo') || colorString.includes('gold')) return 'bg-gradient-electric';
      if (colorString.includes('green') || colorString.includes('emerald') || colorString.includes('teal')) return 'bg-gradient-neon';
      if (colorString.includes('orange') || colorString.includes('red') || colorString.includes('yellow') || colorString.includes('pink') || colorString.includes('rose')) return 'bg-gradient-gold';
      if (colorString.includes('purple') || colorString.includes('violet')) return 'bg-gradient-purple';
      return 'bg-gradient-electric';
    };
    
    const gradientClass = getGradientClass(feature.color);
    const cardClass = viewMode === 'bento' ? layout : 'col-span-1';

    return (
      <motion.div
        className={`${cardClass} feature-card rounded-3xl overflow-hidden group cursor-pointer relative h-full min-h-[280px]`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ 
          duration: 0.3, 
          delay: index * 0.05,
          ease: "easeOut"
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`w-full h-full ${gradientClass}`}></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 h-full flex flex-col p-6 ${isLarge ? 'p-8' : ''} ${isLarge ? 'justify-between' : 'justify-start'}`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`${gradientClass} p-3 rounded-2xl shadow-lg icon-hover`}>
              {IconComponent && <IconComponent className={`${isLarge ? 'h-8 w-8' : 'h-6 w-6'} text-white`} />}
            </div>
            
            {isLarge && (
              <div className="bg-midnight-800/30 px-3 py-1 rounded-full text-xs text-electric-400 font-medium">
                Featured
              </div>
            )}
          </div>

          {/* Title & Tagline */}
          <div className="mb-4 flex-1">
            <h3 className={`font-bold text-startup mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
              {feature.name}
            </h3>
            <p className={`text-electric italic font-medium ${isLarge ? 'text-base' : 'text-sm'} mb-3`}>
              {feature.tagline}
            </p>
            {(isLarge || viewMode === 'grid') && (
              <p className="text-chill text-sm leading-relaxed">
                {feature.description}
              </p>
            )}
          </div>

          {/* Features List - Only for large cards */}
          {isLarge && (
            <div className="space-y-2 mb-6">
              {feature.features.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-sm text-chill"
                >
                  <div className="w-1.5 h-1.5 bg-electric-500 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
              {feature.features.length > 4 && (
                <div className="text-xs text-electric-400 mt-2">
                  +{feature.features.length - 4} more features
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto">
            {!isLarge && viewMode === 'bento' && (
              <div className="text-xs text-chill mb-3 line-clamp-2">
                {feature.description}
              </div>
            )}
          </div>
        </div>

        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-20 bg-startup relative overflow-hidden">
      {/* Background Effects - Simplified */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-electric-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-startup mb-6">
            Meet Your
            <span className="text-gold"> Money Squad</span> 🎯
          </h2>
          <p className="text-xl text-chill max-w-3xl mx-auto mb-8">
            14 AI-powered tools working together to turn you from "Where did my money go?" 
            to becoming a financial wizard 🧙‍♂️
          </p>

          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-midnight-800/50 rounded-2xl p-2 flex items-center space-x-2">
              <motion.button
                onClick={() => {
                  setActiveTab('personal');
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'personal'
                    ? 'btn-startup shadow-lg'
                    : 'text-chill hover:text-electric hover:bg-electric-500/10'
                }`}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <User className="h-4 w-4" />
                <span>Personal</span>
                <span className="text-sm px-2 py-1 rounded-full bg-electric-500/20">
                  {features.length}
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => {
                  setActiveTab('business');
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'business'
                    ? 'btn-startup shadow-lg'
                    : 'text-chill hover:text-electric hover:bg-electric-500/10'
                }`}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Building2 className="h-4 w-4" />
                <span>Business</span>
                <span className="text-sm px-2 py-1 rounded-full bg-electric-500/20">
                  13
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Search & Controls */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-chill" />
            <input
              type="text"
              placeholder="Search features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-midnight-800/50 border border-midnight-600 rounded-2xl text-startup placeholder-chill focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('bento')}
              className={`p-3 rounded-xl transition-all duration-200 ${
                viewMode === 'bento' 
                  ? 'bg-gradient-electric text-white shadow-lg' 
                  : 'bg-midnight-800/50 text-chill hover:text-electric'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-electric text-white shadow-lg' 
                  : 'bg-midnight-800/50 text-chill hover:text-electric'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  isActive
                    ? 'btn-startup shadow-lg'
                    : 'btn-ghost-startup hover:bg-electric-500/10'
                }`}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <IconComponent className={`h-4 w-4 ${isActive ? 'text-white' : 'text-electric'}`} />
                <span>{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-electric-500/20'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Counter */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          key={`${activeTab}-${selectedCategory}-${searchTerm}`}
        >
          <p className="text-chill">
            {searchTerm ? (
              <>Found <span className="text-electric font-bold">{filteredFeatures.length}</span> {activeTab} features matching "<span className="text-electric">{searchTerm}</span>"</>
            ) : (
              <>Showing <span className="text-electric font-bold">{filteredFeatures.length}</span> {activeTab} {selectedCategory === 'all' ? 'features' : `${selectedCategory} features`}</>
            )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${selectedCategory}-${searchTerm}-${viewMode}`}
            className={
              viewMode === 'bento' 
                ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-6 mb-16"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredFeatures.length > 0 ? (
              filteredFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  index={index}
                  layout={getBentoLayout(index, filteredFeatures.length)}
                  viewMode={viewMode}
                />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-startup mb-4">No features found</h3>
                <p className="text-chill mb-6">Try adjusting your search or category filter</p>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setActiveTab('personal');
                  }}
                  className="btn-startup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="card-startup rounded-3xl shadow-xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-rainbow"></div>
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              
              <h3 className="text-3xl font-bold mb-6 text-startup">
                Ready to Transform Your Money Game?
              </h3>
              
              <p className="text-chill mb-8 max-w-2xl mx-auto text-lg">
                Join people who went from "Where did my money go?" to "I'm basically a financial genius!" 💪
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 