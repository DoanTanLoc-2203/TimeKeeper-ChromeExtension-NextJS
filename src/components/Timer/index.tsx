import { Box, Text } from "@chakra-ui/layout";
import * as React from "react";
import { useTimer } from "../../hooks/useTimer";

function Timer() {
  const [time, date] = useTimer();

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
