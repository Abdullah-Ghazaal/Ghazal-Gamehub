import { Text, SimpleGrid, Button } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
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
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={6}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
