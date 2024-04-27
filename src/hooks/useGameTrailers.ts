import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

interface GameTrailers {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

function useGameTrailers(slug: string) {
  const trailerService = new APIClient<GameTrailers>(`/games/${slug}/movies`);

  return useQuery({
    ////
    queryKey: ["game trailers", slug],
    ////
    queryFn: () => trailerService.getAll(),
    ////
    staleTime: ms("24h"),
  });
}

export default useGameTrailers;
