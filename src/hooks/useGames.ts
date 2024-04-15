import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";

function useGames(gameQuery: GameQuery) {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    ////
    queryKey: ["games", gameQuery],
    ////
    queryFn: ({ pageParam = 1 }) =>
      gamesService.get({
        params: {
          genres: gameQuery?.genreID,
          parent_platforms: gameQuery?.platformID,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    ////
    staleTime: 24 * 60 * 60 * 1000, // 24h
    ////
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    ////
  });
}

export default useGames;
