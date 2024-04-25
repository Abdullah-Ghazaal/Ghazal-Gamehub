import { Box, HStack, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <Box paddingY="10px" paddingX={4}>
      <HStack
        justifyContent="space-between"
        marginTop={3}
        marginBottom={5}
        spacing={8}
      >
        <Logo />
        <Show above="sm">
          <Box flexGrow="1">
            <SearchInput />
          </Box>
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
