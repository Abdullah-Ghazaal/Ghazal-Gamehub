import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGeners from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryParamStore from "../services/store";

const GenreList = () => {
  const { data, error, isLoading } = useGeners();
  ////
  const setGenreID = useGameQueryParamStore((s) => s.setGenreID);
  const selectedGenreID = useGameQueryParamStore((s) => s.gameQuery.genreID);
  ////

  if (error) return null;

  return (
    <>
      <Heading marginBottom={4} fontSize="2xl">
        Genres
      </Heading>
      {isLoading && <GenreListSkeleton />}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => setGenreID(genre.id)}
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={4}
                  objectFit="cover"
                  src={getCroppedImgUrl(genre.image_background)}
                />
                {genre.id === selectedGenreID ? (
                  <Text
                    color="teal.300"
                    fontWeight="bold"
                    whiteSpace="normal"
                    textAlign="left"
                  >
                    {genre.name}
                  </Text>
                ) : (
                  <Text whiteSpace="normal" textAlign="left">
                    {genre.name}
                  </Text>
                )}
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
