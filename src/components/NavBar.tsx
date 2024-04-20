import { Box, HStack, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <Box padding="10px">
      <HStack
        justifyContent="space-between"
        marginTop={3}
        marginBottom={5}
        spacing={8}
      >
        <Logo />
        <Show above="sm">
          <SearchInput />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Show below="sm">
        <SearchInput />
      </Show>
    </Box>
  );
}

export default NavBar;
