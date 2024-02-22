import React, { useEffect, useState } from 'react';
import css from './Timer.module.css';

function Timer({ timeToTrip }) {
  const [finishTime, setFinishTime] = useState();
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerID] = useState(0);

  useEffect(() => {
    setFinishTime(new Date(timeToTrip).getTime());
  }, [timeToTrip]);
  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) {
      setDiff([0, 0, 0, 0]);
      setIsTimeout(true);
      alert('Time up!');
      return;
    } // time up
    setDiff([
      Math.floor(diff / 86400), // days
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime, timeToTrip]);
  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout, timerId]);
  useEffect(() => {
    const timerID = setInterval(() => {
      setTick(!tick);
    }, 1000);
    setTimerID(timerID);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className={css.section}>
      <p className={css.item}>
        {diffDays} <span className={css.span}>DAYS</span>
      </p>
      <p className={css.item}>
        {diffH.toString().padStart(2, '0')}{' '}
        <span className={css.span}>HOURS</span>
      </p>
      <p className={css.item}>
        {diffM.toString().padStart(2, '0')}{' '}
        <span className={css.span}>MINUTES</span>
      </p>
      <p className={css.item}>
        {diffS.toString().padStart(2, '0')}{' '}
        <span className={css.span}>SECONDS</span>
      </p>
    </div>
  );
}

export default Timer;
