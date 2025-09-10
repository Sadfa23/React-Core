import { useState, useEffect } from 'react';

export function useTimer() {
  const [timerData, setTimerData] = useState(null);

  useEffect(() => {
    loadTimerData();
    const interval = setInterval(loadTimerData, 1000);
    return () => clearInterval(interval);
  }, []);

  const loadTimerData = async () => {
    const result = await chrome.storage.local.get(['timerData']);
    setTimerData(result.timerData || null);
  };

  const startTimer = async (minutes) => {
    const newTimerData = {
      duration: minutes * 60 * 1000,
      startTime: Date.now(),
      isPaused: false,
      remaining: minutes * 60 * 1000
    };

    await chrome.storage.local.set({ timerData: newTimerData });
    setTimerData(newTimerData);
    chrome.runtime.sendMessage({ action: 'startTimer', timerData: newTimerData });
  };

  const pauseTimer = async () => {
    if (!timerData) return;

    const updatedTimer = { ...timerData };
    
    if (updatedTimer.isPaused) {
      // Resume
      updatedTimer.startTime = Date.now() - (updatedTimer.duration - updatedTimer.remaining);
      updatedTimer.isPaused = false;
    } else {
      // Pause
      const elapsed = Date.now() - updatedTimer.startTime;
      updatedTimer.remaining = Math.max(0, updatedTimer.duration - elapsed);
      updatedTimer.isPaused = true;
    }

    await chrome.storage.local.set({ timerData: updatedTimer });
    setTimerData(updatedTimer);
    chrome.runtime.sendMessage({ action: 'updateTimer', timerData: updatedTimer });
  };

  const stopTimer = async () => {
    await chrome.storage.local.remove(['timerData']);
    setTimerData(null);
    chrome.runtime.sendMessage({ action: 'stopTimer' });
  };

  return {
    timerData,
    startTimer,
    pauseTimer,
    stopTimer
  };
}