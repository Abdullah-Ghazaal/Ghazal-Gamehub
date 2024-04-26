import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Text>{game.description_raw}</Text>
    </Box>
  );
}

export default GameDetailsPage;
