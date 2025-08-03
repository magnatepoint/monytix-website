import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '../data/features.ts';
import { Feature } from '../types/index';
import * as Icons from 'lucide-react';
import { Search, Grid, List, Sparkles, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('bento');

  // Get actual categories from the data
  const categories = useMemo(() => {
    return [
      { id: 'all', name: 'All Features', icon: Grid, count: features.length },
      { id: 'core', name: 'Core Tools', icon: Sparkles, count: features.filter(f => f.category === 'core').length },
      { id: 'planning', name: 'Planning', icon: Icons.Target, count: features.filter(f => f.category === 'planning').length },
      { id: 'insights', name: 'AI Insights', icon: Icons.Brain, count: features.filter(f => f.category === 'insights').length },
      { id: 'engagement', name: 'Engagement', icon: Icons.Heart, count: features.filter(f => f.category === 'engagement').length }
    ];
  }, []);

  // Filter features based on category and search
  const filteredFeatures = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? features 
      : features.filter(feature => feature.category === selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(feature =>
        feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Dynamic Bento layouts - more varied and responsive
  const getBentoLayout = (index: number, total: number) => {
    const patterns = [
      'col-span-2 row-span-2', // Large featured
      'col-span-1 row-span-2', // Tall
      'col-span-1 row-span-1', // Small
      'col-span-2 row-span-1', // Wide
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-1 row-span-1', // Small
      'col-span-2 row-span-1', // Wide
    ];
    return patterns[index % patterns.length];
  };

  const BentoFeatureCard: React.FC<{ 
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
        className={`${cardClass} feature-card rounded-3xl overflow-hidden group cursor-pointer relative`}
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
          <div className="mb-4">
            <h3 className={`font-bold text-startup mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
              {feature.name}
            </h3>
            <p className={`text-electric italic font-medium ${isLarge ? 'text-base' : 'text-sm'}`}>
              {feature.tagline}
            </p>
            {isLarge && (
              <p className="text-chill text-sm leading-relaxed mt-3">
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
            {!isLarge && (
              <div className="text-xs text-chill mb-3 line-clamp-2">
                {feature.description}
              </div>
            )}
            
            <button
              className={`${isLarge ? 'btn-startup' : 'btn-ghost-startup'} ${isLarge ? 'py-3 px-6' : 'py-2 px-4'} text-sm w-full flex items-center justify-center space-x-2 feature-button`}
            >
              <span>{isLarge ? '✨ Explore' : 'Learn More'}</span>
              <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </button>
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
          <p className="text-xl text-chill max-w-3xl mx-auto">
            14 AI-powered tools working together to turn you from "Where did my money go?" 
            to becoming a financial wizard 🧙‍♂️
          </p>
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
          key={`${selectedCategory}-${searchTerm}`}
        >
          <p className="text-chill">
            {searchTerm ? (
              <>Found <span className="text-electric font-bold">{filteredFeatures.length}</span> features matching "<span className="text-electric">{searchTerm}</span>"</>
            ) : (
              <>Showing <span className="text-electric font-bold">{filteredFeatures.length}</span> {selectedCategory === 'all' ? 'features' : `${selectedCategory} features`}</>
            )}
          </p>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${viewMode}`}
            className={
              viewMode === 'bento' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-6 mb-16"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredFeatures.length > 0 ? (
              filteredFeatures.map((feature, index) => (
                <BentoFeatureCard
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
                Join 50K+ people who went from "Where did my money go?" to "I'm basically a financial genius!" 💪
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-startup px-8 py-4 text-lg inline-flex items-center space-x-2 group"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.15 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Free Trial</span>
                  <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
                <motion.button
                  className="btn-ghost-startup px-8 py-4 text-lg inline-flex items-center space-x-2 group"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.15 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 