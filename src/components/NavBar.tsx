import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px" marginY={2}>
      <Logo />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
