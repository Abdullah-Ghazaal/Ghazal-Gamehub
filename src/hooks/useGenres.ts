import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

function useGeners() {
  //

  return useQuery<Genre[], Error>({
    ////
    queryKey: ["genres"],
    ////
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then(({ data }) => data.results);
    },
    ////
    staleTime: 24 * 60 * 60 * 1000, // 24h,
  });

  //
}

export default useGeners;
