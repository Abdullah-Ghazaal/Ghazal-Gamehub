import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";

function useGeners() {
  //

  return useQuery<Genre[], Error>({
    ////
    queryKey: ["genres"],
    ////
    queryFn: () => genreService.get(),
    ////
    staleTime: 24 * 60 * 60 * 1000, // 24h,
  });

  //
}

export default useGeners;
