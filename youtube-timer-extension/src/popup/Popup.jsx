import React from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerControls } from './components/TimerControls';
import { Settings } from './components/Settings';
import { useTimer } from '../hooks/useTimer';
import { useStorage } from '../hooks/useStorage';

export default function Popup() {
  const { timerData, startTimer, pauseTimer, stopTimer } = useTimer();
  const { settings, updateSetting } = useStorage();

  return (
    <div className="w-80 bg-gray-50 font-sans">
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-5">
          YouTube Timer
        </h1>

        <TimerDisplay timerData={timerData} />
        
        <TimerControls 
          onStartTimer={startTimer}
          onPauseTimer={pauseTimer}
          onStopTimer={stopTimer}
          isActive={!!timerData}
          isPaused={timerData?.isPaused}
        />

        <Settings 
          settings={settings}
          onUpdateSetting={updateSetting}
        />
      </div>
    </div>
  );
}