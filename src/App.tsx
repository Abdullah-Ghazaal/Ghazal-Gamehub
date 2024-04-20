import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GamesHeading from "./components/GamesHeading";
import GenresMobile from "./components/GenresMobile";
import ClearFilters from "./components/ClearFilters";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `220px 1fr`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={4}>
        <GamesHeading />
        <Stack marginBottom={5}>
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

export default App;
