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
        {/* Background circle */}
        <circle cx="50" cy="50" r="48" fill="rgba(30,30,30,0.8)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        
        {/* Colored segments - mimicking the original logo */}
        <path 
          d="M 50 2 A 48 48 0 0 1 85.86 25 L 50 50 Z" 
          fill="#fbbf24" 
          opacity="0.9"
        />
        <path 
          d="M 85.86 25 A 48 48 0 0 1 85.86 75 L 50 50 Z" 
          fill="#60a5fa" 
          opacity="0.9"
        />
        <path 
          d="M 85.86 75 A 48 48 0 0 1 14.14 75 L 50 50 Z" 
          fill="#fb7185" 
          opacity="0.9"
        />
        <path 
          d="M 14.14 75 A 48 48 0 0 1 14.14 25 L 50 50 Z" 
          fill="#34d399" 
          opacity="0.9"
        />
        <path 
          d="M 14.14 25 A 48 48 0 0 1 50 2 L 50 50 Z" 
          fill="#f59e0b" 
          opacity="0.9"
        />
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="15" fill="rgba(0,0,0,0.7)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        
        {/* M letter */}
        <text 
          x="50" 
          y="58" 
          textAnchor="middle" 
          fontSize="18" 
          fontWeight="bold" 
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          M
        </text>
      </svg>
    </div>
  );
};

export default MonytixLogo; 