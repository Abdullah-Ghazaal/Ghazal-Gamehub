import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GamesHeading from "./components/GamesHeading";
import GenresMobile from "./components/GenresMobile";
import ClearFilters from "./components/ClearFilters";

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={2}>
          <GenreList
            selectedGenreID={gameQuery.genreID}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreID: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={4}>
        <GamesHeading gameQuery={gameQuery} />
        <Stack marginBottom={5}>
          <Show below="lg">
            <GenresMobile
              selectedGenreID={gameQuery.genreID}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreID: genre.id })
              }
            ></GenresMobile>
          </Show>
          <HStack>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformID: platform.id })
              }
              selectedPlatformID={gameQuery.platformID}
            />
            <SortSelector
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
            <Show above="sm">
              <ClearFilters
                onClearFilters={() => setGameQuery({} as GameQuery)}
              />
            </Show>
          </HStack>
          <Show below="sm">
            <ClearFilters
              onClearFilters={() => setGameQuery({} as GameQuery)}
            />
          </Show>
        </Stack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
