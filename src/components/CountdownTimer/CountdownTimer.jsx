import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

export const CountdownTimer = () => {
  const { days, hours, minutes, seconds, isFinished } = useCountdown();

  const isCountdownFull = days && hours && minutes && seconds;

  return (
    <>
      { !isFinished && isCountdownFull 
        ? <div>{days} : {hours} : {minutes} : {seconds}</div>  
        : <div>Preparing countdown...</div>
      }
      { isFinished && <div>Ready!</div> }
    </>
  )
}
