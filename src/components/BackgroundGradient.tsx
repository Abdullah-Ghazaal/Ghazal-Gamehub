import { Box, Show } from "@chakra-ui/react";

function BackgroundGradient() {
  return (
    <Show breakpoint="(min-width: 769px)">
      <Box
        width="320px"
        height="320px"
        borderRadius="100%"
        backgroundColor="teal.600"
        position={"fixed"}
        top="35vh"
        left="-60"
        zIndex="-10"
        filter={"blur(160px)"}
      />
    </Show>
  );
}

export default BackgroundGradient;
