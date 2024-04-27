import { Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../services/gamesService";
import DescriptionTerm from "./DescriptionTerm";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" columns={2} marginY={5} spacing={4}>
      <DescriptionTerm term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id} as="dd">
            {platform.name}
          </Text>
        ))}
      </DescriptionTerm>
      <DescriptionTerm term="Game Score">
        <CriticScore score={game.metacritic} />
      </DescriptionTerm>
      <DescriptionTerm term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id} as="dd">
            {genre.name}
          </Text>
        ))}
      </DescriptionTerm>
      <DescriptionTerm term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DescriptionTerm>
      <DescriptionTerm term="Website">
        <Link href={game.website} target="_blank" textDecoration="underline">
          {game.website}
        </Link>
      </DescriptionTerm>
      <DescriptionTerm term="Release Date">
        <Text>{!game?.released ? "No info available" : game.released}</Text>
      </DescriptionTerm>
    </SimpleGrid>
  );
}

export default GameAttributes;
