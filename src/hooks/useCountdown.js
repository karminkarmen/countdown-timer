import { useEffect, useState } from 'react';
import { calculateLeftTime } from '../utils/calculateLeftTime';

export const useCountdown = (endTime = new Date("Jan 1, 2022 15:37:25").getTime()) => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isFinished, setIfIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = calculateLeftTime(endTime);

      if (hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
        setIfIsFinished(true);
        clearInterval(interval);
      }

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return {
    days,
    hours,
    minutes,
    seconds,
    isFinished,
  };
}
