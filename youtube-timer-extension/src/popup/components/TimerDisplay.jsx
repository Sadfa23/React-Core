import React from 'react';
import { Clock, Play, Pause } from 'lucide-react';

export function TimerDisplay({ timerData }) {
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = () => {
    if (!timerData) return 0;
    
    if (timerData.isPaused) {
      return timerData.remaining;
    }
    
    const elapsed = Date.now() - timerData.startTime;
    return Math.max(0, timerData.duration - elapsed);
  };

  const remaining = getTimeRemaining();
  const isWarning = remaining <= 5 * 60 * 1000; // 5 minutes
  const isCritical = remaining <= 1 * 60 * 1000; // 1 minute

  return (
    <div className={`
      bg-white rounded-lg p-4 mb-5 shadow-sm text-center
      ${isCritical ? 'ring-2 ring-red-500 animate-pulse' : ''}
      ${isWarning && !isCritical ? 'ring-2 ring-orange-500' : ''}
    `}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-gray-600">
          {!timerData ? 'Timer not active' : 
           timerData.isPaused ? 'Timer paused' : 'Timer active'}
        </span>
        {timerData?.isPaused && <Pause className="w-4 h-4 text-orange-500" />}
        {timerData && !timerData.isPaused && <Play className="w-4 h-4 text-green-500" />}
      </div>
      
      {timerData && (
        <div className={`text-3xl font-mono font-bold ${
          isCritical ? 'text-red-500' : 
          isWarning ? 'text-orange-500' : 'text-primary'
        }`}>
          {formatTime(remaining)}
        </div>
      )}
    </div>
  );
}