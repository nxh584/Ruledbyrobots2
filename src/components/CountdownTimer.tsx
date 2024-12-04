import React, { useEffect, useState } from 'react';
import { getRandomFutureDate } from '../utils/dateUtils';

export const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [targetDate, setTargetDate] = useState(getRandomFutureDate());

  useEffect(() => {
    // Update target date every 7 seconds
    const dateInterval = setInterval(() => {
      setTargetDate(getRandomFutureDate());
    }, 7000);

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(dateInterval);
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-4 text-center">
        {Object.entries(time).map(([key, value]) => (
          <div key={key} className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
            <div className="text-3xl font-mono text-red-500">{value.toString().padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">{key}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 animate-pulse">
        System recalculating temporal coordinates...
      </div>
    </div>
  );
};