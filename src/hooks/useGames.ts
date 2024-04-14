import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gamesService, { Game } from "../services/gamesService";

function useGames(gameQuery: GameQuery) {
  return useQuery<Game[], Error>({
    ////
    queryKey: ["games", gameQuery],
    ////
    queryFn: () =>
      gamesService.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    ////
    staleTime: 60 * 60 * 1000, // 1h
  });
}

export default useGames;
