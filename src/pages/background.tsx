import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useChedule } from "../hooks/useChedule";

const BackgroundPage: NextPage = () => {
  const [checkin, setcheckin] = useState<string | null>("");
  const [checkout, setcheckout] = useState<string | null>("");
  const [check, setcheck] = useState(false);
  const time = useChedule().slice(0, 5);

  useEffect(() => {
    setcheckin(localStorage.getItem("checkinTime"));
    setcheckout(localStorage.getItem("checkoutTime"));
  });

  useEffect(() => {
    if (time.slice(0, 5) === checkin) {
      alert("checkin");
    }
    if (time.slice(0, 5) === checkout) {
      alert("checkout");
    }
  }, [time]);

  return (
    <Box>
      <Text> Checkin Time: {checkin}</Text>
      <Text> Checkout Time: {checkout}</Text>
    </Box>
  );
};

export default BackgroundPage;
