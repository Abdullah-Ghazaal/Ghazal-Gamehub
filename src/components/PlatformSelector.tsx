import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryParamStore from "../services/store";
import useFindPlatform from "../hooks/useFindPlatform";
import iconsMap from "../data/iconsMap";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  ////
  const setPlatformID = useGameQueryParamStore((s) => s.setPlatformID);
  const platformID = useGameQueryParamStore((s) => s.gameQuery.platformID);
  ////
  const selectedPlatform = useFindPlatform(platformID);
  ////

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} flexGrow={1}>
        {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList width="28vw">
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
            key={platform.id}
            display="flex"
            justifyContent="space-between"
          >
            {platform.name}
            <Icon
              as={iconsMap[`${platform.slug}`]}
              marginRight={3}
              color="teal.300"
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
