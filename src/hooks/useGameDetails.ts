import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gamesService, { Game } from "../services/gamesService";

function useGameDetails(slug: string) {
  return useQuery<Game, Error>({
    ////
    queryKey: ["game details", slug],
    ////
    queryFn: () => gamesService.get(slug),
    ////
    staleTime: ms("24h"),
  });
}

export default useGameDetails;
