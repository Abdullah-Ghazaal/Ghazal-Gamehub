import { GridItem, Img, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error || isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((screenshot) => (
        <GridItem key={screenshot.id}>
          <Img src={screenshot.image} borderRadius="15px" />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
