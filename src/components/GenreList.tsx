import { Heading } from "@chakra-ui/react";
import useGeners from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGeners();
  return (
    <>
      <Heading>Genres</Heading>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
