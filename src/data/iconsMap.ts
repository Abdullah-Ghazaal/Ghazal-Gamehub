import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone, MdGames } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega, SiD3Dotjs } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { CgGames } from "react-icons/cg";

const iconsMap: { [key: string]: IconType } = {
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
  "3do": SiD3Dotjs,
  "commodore-amiga": MdGames,
  "neo-geo": CgGames,
};

export default iconsMap;
