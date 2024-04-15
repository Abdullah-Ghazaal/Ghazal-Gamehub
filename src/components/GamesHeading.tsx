import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeners from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GamesHeading({ gameQuery }: Props) {
  ////
  const { data: genres } = useGeners();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreID
  );
  ////
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformID
  );
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
