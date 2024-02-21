import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading
        fontFamily={"serif"}
        fontStyle={"italic"}
        fontSize={"2xl"}
        letterSpacing={"2px"}
      >
        GHAZAL
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
