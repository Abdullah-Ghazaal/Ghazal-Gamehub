import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../services/platformService";

interface Props {
  platforms: Platform[];
}

function PlatformIcons({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
    atari: SiAtari,
  };

  return (
    <HStack>
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          color={"teal.400"}
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIcons;
