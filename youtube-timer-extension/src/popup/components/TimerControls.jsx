import React, { useState } from 'react';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';

const PRESET_TIMES = [
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '1 hour', value: 60 },
  { label: '2 hours', value: 120 }
];

export function TimerControls({ 
  onStartTimer, 
  onPauseTimer, 
  onStopTimer, 
  isActive, 
  isPaused 
}) {
  const [customTime, setCustomTime] = useState('');

  const handlePresetClick = (minutes) => {
    onStartTimer(minutes);
  };

  const handleCustomTimer = () => {
    const minutes = parseInt(customTime);
    if (minutes && minutes > 0) {
      onStartTimer(minutes);
      setCustomTime('');
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Set Timer
      </h3>
      
      {/* Preset Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {PRESET_TIMES.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => handlePresetClick(value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary hover:text-white transition-colors font-medium"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Custom Timer */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Custom minutes"
          min="1"
          max="480"
          className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
        />
        <button
          onClick={handleCustomTimer}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Set
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onPauseTimer}
          disabled={!isActive}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        
        <button
          onClick={onStopTimer}
          disabled={!isActive}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Square className="w-4 h-4" />
          Stop
        </button>
        
        <button
          onClick={onStopTimer}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}