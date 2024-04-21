import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import genres from "../data/genres";
import getCroppedImgUrl from "../services/image-url";
import useGameQueryParamStore from "../services/store";

function GenresMobile() {
  const setGenreID = useGameQueryParamStore((s) => s.setGenreID);
  const genreID = useGameQueryParamStore((s) => s.gameQuery.genreID);

  const selectedGenre = genres.find((g) => g.id === genreID);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Select Genre"}
      </MenuButton>
      <MenuList width="90vw">
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            onClick={() => setGenreID(genre.id)}
            marginY={2}
          >
            <Image
              src={getCroppedImgUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={4}
              objectFit="cover"
              marginRight="8px"
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
              <Text
                whiteSpace="normal"
                textAlign="left"
                fontSize={"lg"}
                fontWeight="bold"
              >
                {genre.name}
              </Text>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GenresMobile;
