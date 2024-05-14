import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../services/platformService";
import iconsMap from "../data/iconsMap";

interface Props {
  platforms: Platform[];
}

function PlatformIcons({ platforms }: Props) {
  return (
    <HStack>
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          color={"teal.400"}
          as={iconsMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIcons;
