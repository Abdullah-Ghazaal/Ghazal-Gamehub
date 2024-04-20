import { Heading } from "@chakra-ui/react";
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
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {gameQuery.searchText ? searchHeading : heading}
    </Heading>
  );
}

export default GamesHeading;
