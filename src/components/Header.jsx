import React from "react";
import { Divider, Stack, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
const Header = ({ onOpen }) => {
  return (
    <Stack
      direction="row"
      align="center"
      padding="1rem"
      position={"sticky"}
      top={0}
      left={0}
      color="whitesmoke"
      bg={"green.800"}
    >
      <FaBars
        color="whitesmoke"
        cursor={"pointer"}
        fontSize="2rem"
        onClick={onOpen}
      />
      <Text fontSize={"2xl"} paddingInline={"1rem"} fontWeight={"900"}>
        Deforestation KE
      </Text>
    </Stack>
  );
};

export default Header;
