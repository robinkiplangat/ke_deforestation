import { Stack, Text, Link, Divider, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <Stack
    direction={"row"}
    divider={<Divider />}
    spacing="2rem"
    padding={"2"}
    bg={"#333"}
    color="whitesmoke"
  >
    <Flex>
      <Link
        href="https://github.com/steveshammah/ke_deforestation"
        fontSize={"1.5rem"}
        target="_blank"
      >
        <FaGithub />
      </Link>
    </Flex>
    <Text width={"30rem"}>
      Deforestation Ke @{new Date().getFullYear()}. All rights reserved.
    </Text>
  </Stack>
);
export default Footer;
