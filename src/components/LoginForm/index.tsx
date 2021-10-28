import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import styled from "@emotion/styled";
import * as React from "react";
import { LogginInfo } from "../../constants/interface";

interface Props {
  onChangeLogginInfo: (value: LogginInfo) => void;
}

const ButtonLoggin = styled.button`
  background-color: transparent;
  color: white;
  outline: none;
  width: 30%;
  height: 40px;
  border: 1px solid #71a888;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #71a888;
  }
`;

function LogginForm({ onChangeLogginInfo }: Props) {
  const [email, setemail] = React.useState("");
  const [passWord, setpassWord] = React.useState("");
  const [isSuccess, setisSuccess] = React.useState(false);
  const toast = useToast();

  const logginAction = () => {
    onChangeLogginInfo({ isSuccess: true, cookie: "" });
  };
  const handelChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };
  const handelChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpassWord(event.target.value);
  };

  return (
    <Flex
      w="30%"
      p="30px"
      borderRadius="10px"
      border="1px solid white"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      background="#181818">
      <Text
        textTransform="uppercase"
        fontSize="20px"
        fontWeight="bold"
        color="white">
        Automatic Timekeeper
      </Text>
      <Input
        type="email"
        placeholder="Email"
        w="80%"
        h="50px"
        fontSize="15px"
        textAlign="center"
        py="10px"
        color="white"
        background="transparent"
        outline="none"
        border="1px solid #1D62B4"
        borderRadius="25px"
        mb="20px"
        onChange={(event) => {
          handelChangeEmail(event);
        }}
      />
      <Input
        type="password"
        placeholder="Password"
        w="80%"
        h="50px"
        fontSize="15px"
        textAlign="center"
        py="10px"
        color="white"
        background="transparent"
        outline="none"
        border="1px solid #1D62B4"
        borderRadius="25px"
        mb="20px"
        onChange={(event) => {
          handelChangePassword(event);
        }}
      />
      <ButtonLoggin
        onClick={() => {
          logginAction();
        }}>
        Loggin
      </ButtonLoggin>
      <Text>Note: just click Loggin!!</Text>
    </Flex>
  );
}

export default LogginForm;
