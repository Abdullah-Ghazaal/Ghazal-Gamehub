import { Box } from "@chakra-ui/react";

function BackgroundGradient() {
  return (
    <Box
      width="400px"
      height="400px"
      borderRadius="100%"
      backgroundColor="teal.600"
      position={"fixed"}
      top="35vh"
      left="-60"
      zIndex="-10"
      filter={"blur(160px)"}
    />
  );
}

export default BackgroundGradient;
