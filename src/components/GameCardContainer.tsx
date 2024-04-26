import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={12}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: `transform 0.2s ease-in-out`,
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
