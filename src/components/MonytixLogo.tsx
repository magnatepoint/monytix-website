import React from 'react';

interface MonytixLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MonytixLogo: React.FC<MonytixLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative flex items-center justify-center rounded-lg overflow-hidden`}>
      {/* Background Circle with segments */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
        
        {/* Colored segments - matching the favicon design */}
        <path 
          d="M 50 2 A 48 48 0 0 1 98 50 L 50 50 Z" 
          fill="#fbbf24" 
          opacity="1"
        />
        <path 
          d="M 98 50 A 48 48 0 0 1 50 98 L 50 50 Z" 
          fill="#ff6b35" 
          opacity="1"
        />
        <path 
          d="M 50 98 A 48 48 0 0 1 2 50 L 50 50 Z" 
          fill="#1e40af" 
          opacity="1"
        />
        <path 
          d="M 2 50 A 48 48 0 0 1 50 2 L 50 50 Z" 
          fill="#38bdf8" 
          opacity="1"
        />
        
        {/* Center circle - white background like the favicon */}
        <circle cx="50" cy="50" r="22" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5"/>
        
        {/* M letter */}
        <text 
          x="50" 
          y="58" 
          textAnchor="middle" 
          fontSize="16" 
          fontWeight="bold" 
          fill="#1e293b"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          M
        </text>
      </svg>
    </div>
  );
};

export default MonytixLogo; 