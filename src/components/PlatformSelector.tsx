import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryParamStore from "../services/store";
import useFindPlatform from "../hooks/useFindPlatform";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  ////
  const [setPlatformID, platformID] = useGameQueryParamStore((s) => [
    s.setPlatformID,
    s.gameQuery.platformID,
  ]);
  ////
  const selectedPlatform = useFindPlatform(platformID);
  ////

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
