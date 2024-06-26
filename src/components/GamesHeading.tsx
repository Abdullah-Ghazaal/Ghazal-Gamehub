import { Box, Heading, Icon, Link } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryParamStore from "../services/store";
import { FaExternalLinkAlt } from "react-icons/fa";

function GamesHeading() {
  const gameQuery = useGameQueryParamStore((s) => s.gameQuery);
  ////
  const selectedGenre = useFindGenre(gameQuery.genreID);
  ////
  const selectedPlatform = useFindPlatform(gameQuery.platformID);
  ////
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  ////
  const searchHeading = `Search results: "${gameQuery.searchText}"`;
  ////
  return (
    <Box marginBottom={5}>
      <Heading as="h1" fontSize="5xl">
        {gameQuery.searchText ? searchHeading : heading}
      </Heading>
      <Link
        href="https://rawg.io/apidocs"
        target="_blank"
        fontWeight="bold"
        color="teal.300"
      >
        Data Source: RAWG API <Icon as={FaExternalLinkAlt} boxSize={3}></Icon>
      </Link>
    </Box>
  );
}

export default GamesHeading;
