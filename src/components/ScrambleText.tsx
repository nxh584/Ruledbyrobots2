import React, { useState, useEffect } from 'react';
import { scrambleText } from '../utils/textUtils';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      setIsScrambling(true);
      
      let scrambleCount = 0;
      const duration = 2000; // 2 seconds
      const fps = 30;
      const totalFrames = (duration / 1000) * fps;
      
      const frameInterval = setInterval(() => {
        if (scrambleCount < totalFrames) {
          setDisplayText(scrambleText(text));
          scrambleCount++;
        } else {
          clearInterval(frameInterval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 1000 / fps);

      return () => clearInterval(frameInterval);
    }, 7000);

    return () => clearInterval(scrambleInterval);
  }, [text]);

  return (
    <p className={`transition-colors duration-200 ${className} ${isScrambling ? 'text-red-500' : ''}`}>
      {displayText}
    </p>
  );
};