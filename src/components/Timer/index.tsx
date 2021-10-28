import { Box, Text } from "@chakra-ui/layout";
import * as React from "react";

interface Props {
  getCurrentTime: (value: string) => void;
}

function Timer({ getCurrentTime }: Props) {
  const [time, settime] = React.useState("00:00:00");
  const [date, setdate] = React.useState("-");

  React.useEffect(() => {
    const today = new Date();
    const hours =
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const minutes =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const seconds =
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
    const currentTime = hours + ":" + minutes + ":" + seconds;
    settime(currentTime);
    setdate(today.toUTCString().slice(0, 16));
    getCurrentTime(currentTime);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      const hours =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      const minutes =
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
      const seconds =
        today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
      const currentTime = hours + ":" + minutes + ":" + seconds;
      settime(currentTime);
      setdate(today.toUTCString().slice(0, 16));
      getCurrentTime(currentTime);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Box w="100%" textAlign="center">
      <Text fontSize="50px" fontWeight="bold" m="0" color="white">
        {time}
      </Text>
      <Text color="white">{date}</Text>
    </Box>
  );
}

export default Timer;
