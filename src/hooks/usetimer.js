// useTimer.js
import { useState, useEffect } from "react";

export function useTimer(initialSeconds = 60) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [showResend, setShowResend] = useState(false);

  const startTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(true);
    setShowResend(false);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
    setShowResend(false);
  };

  const forceResend = () => {
    setSeconds(initialSeconds);
    setIsActive(true);
    setShowResend(false);
  };

  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      setShowResend(true);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return {
    seconds,
    isActive,
    showResend,
    startTimer,
    resetTimer,
    forceResend,
    formatTime,
  };
}
