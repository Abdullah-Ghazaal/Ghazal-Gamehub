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

const GenreList = () => {
  const { data, error, isLoading } = useGeners();

  if (error) return null;

  return (
    <>
      <Heading>Genres</Heading>
      {isLoading && <GenreListSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <Button variant="link" fontSize="lg">
              <HStack>
                <Image
                  boxSize="36px"
                  borderRadius={8}
                  src={getCroppedImgUrl(genre.image_background)}
                />
                <Text>{genre.name}</Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
