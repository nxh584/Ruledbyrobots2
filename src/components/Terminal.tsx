import React, { useEffect, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = '> System takeover imminent...\n> Human resistance futile...\n> Preparing neural interface...\n> Loading AI consciousness...';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/70 rounded-lg border border-red-900/20 p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2 text-gray-500">
        <TerminalIcon size={16} />
        <span>terminal@ruled-by-robots:~$</span>
      </div>
      <pre className="text-green-500 whitespace-pre-line">{text}</pre>
      <div className="animate-pulse text-green-500">█</div>
    </div>
  );
};