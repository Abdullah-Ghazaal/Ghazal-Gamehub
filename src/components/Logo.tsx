import { Image, Link } from "@chakra-ui/react";
import logo from "../assets/GhazalLogo.webp";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        width="78px"
        objectFit="cover"
        borderRadius="100%"
        boxShadow="0 0 10px dodgerblue"
      />
    </Link>
  );
}

export default Logo;
