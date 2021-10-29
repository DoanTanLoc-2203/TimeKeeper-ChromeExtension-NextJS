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
  return time;
};

export function useChedule() {
  const current = getDateTime();
  const [time, settime] = useState(current);

  useEffect(() => {
    const timer = setInterval(() => {
      const tempCurrent = getDateTime();
      settime(tempCurrent);
    }, 10000);

    return () => clearInterval(timer);
  });
  return time;
}
