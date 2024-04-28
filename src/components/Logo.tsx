import { Image } from "@chakra-ui/react";
import logo from "../assets/GhazalLogo.webp";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
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
