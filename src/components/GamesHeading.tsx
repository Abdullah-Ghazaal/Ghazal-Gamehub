import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";

interface Props {
  gameQuery: GameQuery;
}

function GamesHeading({ gameQuery }: Props) {
  ////
  const selectedGenre = useFindGenre(gameQuery.genreID);
  ////
  const selectedPlatform = useFindPlatform(gameQuery.platformID);
  ////
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  ////
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
}

export default GamesHeading;
