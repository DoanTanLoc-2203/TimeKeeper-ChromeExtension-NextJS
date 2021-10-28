import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const BackgroundPage: NextPage = () => {
  const [checkin, setcheckin] = useState<string | null>("");
  const [checkout, setcheckout] = useState<string | null>("");
  const [currentTime, setcurrentTime] = useState("00:00:00");

  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      const hours =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      const minutes =
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
      const seconds =
        today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
      const current = hours + ":" + minutes + ":" + seconds;
      setcurrentTime(current);
    }, 1000);
  });

  useEffect(() => {
    setcheckin(window.localStorage.getItem("checkinTime"));
    setcheckout(window.localStorage.getItem("checkoutTime"));
  });

  useEffect(() => {
    if (currentTime === checkin) {
      alert("checkin");
    }
    if (currentTime === checkout) {
      alert("checkout");
    }
  }, [currentTime]);

  return (
    <Box>
      <Text> Checkin Time: {checkin}</Text>
      <Text> Checkin Time: {checkout}</Text>
    </Box>
  );
};

export default BackgroundPage;
