import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

interface Screenshot {
  id: number;
  image: string;
}

function useScreenshots(gameId: number) {
  const screenshotService = new APIClient<Screenshot>(
    `games/${gameId}/screenshots`
  );

  return useQuery({
    ////
    queryKey: ["screenshots", gameId],
    ////
    queryFn: screenshotService.getAll,
    ////
    staleTime: ms("24h"),
  });
}

export default useScreenshots;
