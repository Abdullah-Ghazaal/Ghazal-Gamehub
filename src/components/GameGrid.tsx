import { Text, SimpleGrid } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameGridLoader from "./GameGridLoader";

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  if (isLoading) return <GameGridLoader />;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={data?.pageParams.length || 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<GameGridLoader />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          padding={2}
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results.map((game) =>
                game.esrb_rating ? (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ) : null
              )}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
