import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Controller from "../components/Controller";
import Timer from "../components/Timer";
import { LogginInfo } from "../constants/interface";

const Loggin: NextPage = () => {
  const [info, setinfo] = useState<LogginInfo>({
    cookie: "",
    isSuccess: false,
  });
  const handleChangeLoggin = (value: LogginInfo) => {
    setinfo(value);
  };
  return (
    <Flex
      w="500px"
      h="400px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#4158D0"
      backgroundImage="linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)">
      <Flex
        w="80%"
        p="30px"
        borderRadius="10px"
        border="1px solid white"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        background="#181818">
        <Timer />
        <Controller />
      </Flex>
    </Flex>
  );
};

export default Loggin;
