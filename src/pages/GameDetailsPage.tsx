import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

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
    <Box padding={4}>
      <Heading as="h2">{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
}

export default GameDetailsPage;
