import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  baseTheme,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);

  if (error) throw new Error(); // to redirect to the ErrorPage.

  if (isLoading)
    return (
      <Box textAlign="center" marginY={3}>
        <Spinner size="xl" />
      </Box>
    );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} padding={4} spacing={5}>
      <GridItem>
        <Heading as="h2" mb={2}>
          {game.name}
        </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={slug!} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
