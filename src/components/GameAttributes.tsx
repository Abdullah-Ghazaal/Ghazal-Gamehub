import { GridItem, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../services/gamesService";
import DescriptionTerm from "./DescriptionTerm";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid
      as="dl"
      columns={2}
      gridTemplateColumns={"1.5fr 1fr"}
      marginY={7}
      spacingY={4}
      spacingX={2}
    >
      <GridItem>
        <DescriptionTerm term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id} as="dd">
              {genre.name}
            </Text>
          ))}
        </DescriptionTerm>
      </GridItem>
      <GridItem>
        <DescriptionTerm term="Score">
          <CriticScore score={game.metacritic} />
        </DescriptionTerm>
      </GridItem>
      <GridItem>
        <DescriptionTerm term="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id} as="dd">
              {p.name}
            </Text>
          ))}
        </DescriptionTerm>
      </GridItem>
      <GridItem>
        <DescriptionTerm term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id} as="dd">
              {platform.name}
            </Text>
          ))}
        </DescriptionTerm>
      </GridItem>
      <GridItem>
        <DescriptionTerm term="Website">
          <Link href={game.website} target="_blank" textDecoration="underline">
            {game.website}
          </Link>
        </DescriptionTerm>
      </GridItem>
      <GridItem>
        <DescriptionTerm term="Released">
          <Text as="dd">
            {!game?.released ? "No info available" : game.released}
          </Text>
        </DescriptionTerm>
      </GridItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
