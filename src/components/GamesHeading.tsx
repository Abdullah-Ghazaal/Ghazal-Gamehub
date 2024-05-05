import { Box, Heading, Link } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryParamStore from "../services/store";

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
        href="https://api.rawg.io"
        target="_blank"
        fontWeight="bold"
        color="teal.300"
      >
        Data Source: RAWG API
      </Link>
    </Box>
  );
}

export default GamesHeading;
