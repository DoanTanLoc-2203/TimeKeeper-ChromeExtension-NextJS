import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  cookie: string;
  currentTime: string;
}

const ButtonCheckin = styled.button`
  background-color: #007cc3;
  color: white;
  border: none;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  margin: 5px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #5688a5;
  }
`;
const ButtonCheckout = styled.button`
  background-color: #ff3547;
  color: white;
  border: none;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  margin: 5px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #f76c78;
  }
`;

function Controller() {
  const [checkin, setcheckin] = useState<string | null>("07:50:00");
  const [checkout, setcheckout] = useState<string | null>("17:10");

  useEffect(() => {
    setcheckin(
      window.localStorage.getItem("checkinTime") !== null
        ? window.localStorage.getItem("checkinTime")
        : checkin,
    );
    setcheckout(
      window.localStorage.getItem("checkoutTime") !== null
        ? window.localStorage.getItem("checkoutTime")
        : checkout,
    );
  });

  const handleChangeCheckin = (event: ChangeEvent<HTMLInputElement>) => {
    setcheckin(event.target.value + ":00");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("checkinTime", event.target.value + ":00");
    }
  };
  const handleChangeCheckout = (event: ChangeEvent<HTMLInputElement>) => {
    setcheckout(event.target.value + ":00");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("checkoutTime", event.target.value + ":00");
    }
  };

  return (
    <Box w="80%">
      <Flex
        justifyContent="space-between"
        h="50px"
        py="10px"
        alignItems="center">
        <Text fontSize="15px" color="white">
          Checkin Time:
        </Text>
        <Input
          ml="10px"
          type="time"
          defaultValue={checkin !== null ? checkin : "00:00:00"}
          onChange={(event) => {
            handleChangeCheckin(event);
          }}
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        h="50px"
        py="10px"
        alignItems="center">
        <Text fontSize="15px" color="white">
          Checkout Time:
        </Text>
        <Input
          ml="10px"
          type="time"
          defaultValue={checkout !== null ? checkout : "00:00:00"}
          onChange={(event) => {
            handleChangeCheckout(event);
          }}
        />
      </Flex>
    </Box>
  );
}

export default Controller;
