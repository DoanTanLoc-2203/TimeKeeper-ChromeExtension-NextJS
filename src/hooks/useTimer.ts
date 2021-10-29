import { useEffect, useState } from "react";

const getDateTime = () => {
  const today = new Date();
  const hours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const seconds =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;
  const date = today.toUTCString().slice(0, 16);
  return { time, date };
};

export function useTimer() {
  const current = getDateTime();
  const [time, settime] = useState(current.time);
  const [date, setdate] = useState(current.date);

  useEffect(() => {
    const timer = setInterval(() => {
      const tempCurrent = getDateTime();
      settime(tempCurrent.time);
      setdate(tempCurrent.date);
    }, 1000);

    return () => clearInterval(timer);
  });
  return [time, date];
}
