import { Grid, Show, GridItem, Stack, HStack } from "@chakra-ui/react";
import ClearFilters from "../components/ClearFilters";
import GameGrid from "../components/GameGrid";
import GamesHeading from "../components/GamesHeading";
import GenreList from "../components/GenreList";
import GenresMobile from "../components/GenresMobile";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `220px 1fr`,
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} paddingX={4}>
        <GamesHeading />
        <Stack marginBottom={6}>
          <Show below="lg">
            <GenresMobile></GenresMobile>
          </Show>
          <HStack>
            <PlatformSelector />
            <SortSelector />
            <Show above="sm">
              <ClearFilters />
            </Show>
          </HStack>
          <Show below="sm">
            <ClearFilters />
          </Show>
        </Stack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
