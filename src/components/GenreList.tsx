import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGeners();
  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY={4}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImgUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
