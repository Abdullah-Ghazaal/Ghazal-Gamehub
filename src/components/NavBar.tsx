import { Box, HStack, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <Box padding="10px">
      <HStack justifyContent="space-between" marginTop={3} marginBottom={6}>
        <Logo />
        <Show above="md">
          <SearchInput onSearch={onSearch} />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Show below="sm">
        <SearchInput onSearch={onSearch} />
      </Show>
    </Box>
  );
}

export default NavBar;
