import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  feature, 
  index, 
  isExpanded = false, 
  onToggleExpand 
}) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
            <motion.div
          className="card-startup rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover-float group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-6 space-y-4">
        {/* Icon and Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
              {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
            </div>
            <div>
                                <h3 className="text-xl font-bold text-startup">{feature.name}</h3>
                  <p className="text-sm text-electric italic font-medium">{feature.tagline}</p>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            feature.category === 'core' ? 'bg-gold-100 text-gold-600' :
            feature.category === 'planning' ? 'bg-green-100 text-green-600' :
            feature.category === 'insights' ? 'bg-purple-100 text-purple-600' :
            'bg-orange-100 text-orange-600'
          }`}>
            {feature.category}
          </div>
        </div>

        {/* Description */}
                    <p className="text-chill leading-relaxed">{feature.description}</p>

        {/* Features List */}
        <div className="space-y-2">
          {feature.features.slice(0, isExpanded ? undefined : 3).map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-2 text-sm text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
                                <div className="w-1.5 h-1.5 bg-electric-500 rounded-full glow-startup"></div>
                  <span>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {feature.features.length > 3 && (
          <button
            onClick={onToggleExpand}
            className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : `Show ${feature.features.length - 3} More Features`}
          </button>
        )}

        {/* CTA Buttons */}
        <div className="flex space-x-3 pt-4">
                        <button className="flex-1 btn-ghost-startup py-2 text-sm hover:scale-105 transition-all">
                Learn More
              </button>
              <button className="flex-1 btn-startup py-2 text-sm wiggle-on-hover">
                Try Now ⚡
              </button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default FeatureCard; 