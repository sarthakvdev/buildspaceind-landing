import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const interval = useRef();

  // The state for our timer
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");

  const startTimer = () => {
    const countdownDate = new Date("April 3 2022 11:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        // stops timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="font-MonumentEXT text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold text-white flex flex-row tracking-wide flex-wrap">
      <h2 className="mr-5">
        {timerDays} <span className="opacity-50">days</span>,
      </h2>
      <h2 className="mr-5">
        {timerHours} <span className="opacity-50">hours</span>,
      </h2>
      <h2>
        {timerMinutes} <span className="opacity-50">mins</span> left
      </h2>
    </div>
  );
};

export default Timer;
