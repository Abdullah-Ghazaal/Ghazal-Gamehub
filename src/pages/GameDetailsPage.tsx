import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { GridItem, Heading, Icon, Link, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import DetailsPageSkeleton from "../components/DetailsPageSkeleton";
import { FaExternalLinkAlt } from "react-icons/fa";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!);

  if (error) throw new Error(); // to redirect to the ErrorPage.

  if (isLoading) return <DetailsPageSkeleton />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} padding={4} spacing={5}>
      <GridItem>
        <Heading as="h2" mb={2}>
          {game.name}
        </Heading>
        <Link
          href="https://rawg.io/apidocs"
          target="_blank"
          fontWeight="bold"
          color="teal.300"
        >
          Data Source: RAWG API <Icon as={FaExternalLinkAlt} boxSize={3}></Icon>
        </Link>
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
