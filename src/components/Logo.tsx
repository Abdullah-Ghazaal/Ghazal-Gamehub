import { HStack, Heading, Icon, Link } from "@chakra-ui/react";
import { SlGameController } from "react-icons/sl";

function Logo() {
  return (
    <Link href="/">
      <HStack
        borderWidth="3px"
        borderStyle="dotted"
        borderColor={"blue.400"}
        padding="5px"
        paddingY="10px"
        borderRadius="15px"
      >
        <Icon boxSize={6} color={"red.500"} as={SlGameController}></Icon>
        <Heading
          fontFamily={"serif"}
          fontStyle={"italic"}
          fontSize={"2xl"}
          letterSpacing={"1px"}
        >
          GHAZAL
        </Heading>
        <Icon boxSize={6} color={"red.500"} as={SlGameController}></Icon>
      </HStack>
    </Link>
  );
}

export default Logo;
