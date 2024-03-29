import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGeners();

  if (error) return null;

  return (
    <>
      <Heading marginBottom={4} fontSize="2xl">
        Genres
      </Heading>
      {isLoading && <GenreListSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelectedGenre(genre)}
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={4}
                  objectFit="cover"
                  src={getCroppedImgUrl(genre.image_background)}
                />
                {genre.id === selectedGenre?.id ? (
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
