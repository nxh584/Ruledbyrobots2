import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => (
  <div className={`relative ${className}`}>
    <span className="absolute top-0 left-0 text-red-500 opacity-50 animate-glitch-1">{text}</span>
    <span className="absolute top-0 left-0 text-cyan-500 opacity-50 animate-glitch-2">{text}</span>
    <span className="relative">{text}</span>
  </div>
);