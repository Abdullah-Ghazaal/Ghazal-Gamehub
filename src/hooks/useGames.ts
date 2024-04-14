import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

interface esrb_rating {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  esrb_rating: esrb_rating;
}

function useGames(gameQuery: GameQuery) {
  // return useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       parent_platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );

  return useQuery<Game[], Error>({
    ////
    queryKey: ["games", gameQuery],
    ////
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          },
        })
        .then(({ data }) => data.results);
    },
    ////
    staleTime: 60 * 60 * 1000, // 1h
  });
}

export default useGames;
