import React, { useEffect, useState } from 'react';

//   function getTimeToTrip(tripDate) {
//     console.log(tripDate);
//     const countDownDate = new Date(tripDate).getTime();
// console.log(countDownDate);
//     const myFunc = setInterval(function () {
//       const now = new Date().getTime();
//       const timeLeft = countDownDate - now;
//       const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
//       if (timeLeft < 0) {
//         return alert('TIME UP!!');
//       }
//       return (
// <div>
//   <p>
//     {days} <span>DAYS</span>
//   </p>
//   <p>
//     {hours} <span>HOURS</span>
//   </p>
//   <p>
//     {minutes} <span>MINUTES</span>
//   </p>
//   <p>
//     {seconds} <span>SECONDS</span>
//   </p>
// </div>
//       );
//     }, 1000);

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
    <div>
      <p>
        {diffDays} <span>DAYS</span>
      </p>
      <p>
        {diffH.toString().padStart(2, '0')} <span>HOURS</span>
      </p>
      <p>
        {diffM.toString().padStart(2, '0')} <span>MINUTES</span>
      </p>
      <p>
        {diffS.toString().padStart(2, '0')} <span>SECONDS</span>
      </p>
    </div>
  );
}

export default Timer;
