import { useInfiniteQuery } from "@tanstack/react-query";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryParamStore from "../services/store";

function useGames() {
  const gameQuery = useGameQueryParamStore((s) => s.gameQuery);
  //
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    ////
    queryKey: ["games", gameQuery],
    ////
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery?.genreID,
          parent_platforms: gameQuery?.platformID,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    ////
    staleTime: ms("24h"),
    ////
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    ////
  });
}

export default useGames;
