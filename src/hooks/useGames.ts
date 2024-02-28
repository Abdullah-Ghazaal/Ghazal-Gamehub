import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

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
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
}

export default useGames;
