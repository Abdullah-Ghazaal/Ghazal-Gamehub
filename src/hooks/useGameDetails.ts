import { useQuery } from "@tanstack/react-query";
import gameDetailsService from "../services/gameDetailService";
import ms from "ms";
import { Game } from "../services/gamesService";

function useGameDetails(slug: string) {
  return useQuery<Game, Error>({
    ////
    queryKey: ["game details", slug],
    ////
    queryFn: () => gameDetailsService.get(slug),
    ////
    staleTime: ms("24h"),
  });
}

export default useGameDetails;
