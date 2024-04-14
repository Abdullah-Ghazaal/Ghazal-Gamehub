import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  //

  return useQuery<Platform[], Error>({
    ////
    queryKey: ["platforms"],
    ////
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then(({ data }) => data.results);
    },
    ////
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

  //
}

export default usePlatforms;
