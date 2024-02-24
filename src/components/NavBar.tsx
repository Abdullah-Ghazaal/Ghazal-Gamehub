import { HStack, Heading, Icon } from "@chakra-ui/react";
import { SlGameController } from "react-icons/sl";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px" marginY={2}>
      <HStack>
        <Icon boxSize={6} color={"red.500"} as={SlGameController}></Icon>
        <Heading
          fontFamily={"serif"}
          fontStyle={"italic"}
          fontSize={"2xl"}
          letterSpacing={"2px"}
          color={"blue.400"}
        >
          GHAZAL
        </Heading>
        <Icon boxSize={6} color={"red.500"} as={SlGameController}></Icon>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
