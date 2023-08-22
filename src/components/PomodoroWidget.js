import React, { useState, useEffect } from 'react';

const PomodoroWidget = () => {
  const [timer, setTimer] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setPlaySound(true); // Trigger sound
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer]);

  useEffect(() => {
    if (playSound) {
      const audio = new Audio('/timer-end.mp3');
      audio.play();
      setPlaySound(false);
    }
  }, [playSound]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(1500); // Reset to 25 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Pomodoro Timer</h2>
      <div className="text-center">
        <p className="text-2xl mb-2">{formatTime(timer)}</p>
        <button
          className={`rounded px-4 py-2 ${isActive ? 'bg-red-500' : 'bg-green-500'} text-white`}
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="rounded px-4 py-2 bg-gray-500 text-white ml-2"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroWidget;