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
import { Genre } from "../services/genreService";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresMobile({ onSelectedGenre, selectedGenre }: Props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginBottom={2}>
        {selectedGenre?.name || "Select Genre"}
      </MenuButton>
      <MenuList width="90vw">
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            onClick={() => onSelectedGenre(genre)}
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
