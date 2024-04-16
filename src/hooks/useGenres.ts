import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import ms from "ms";
function useGeners() {
  //

  return useQuery({
    ////
    queryKey: ["genres"],
    ////
    queryFn: () => genreService.get(),
    ////
    staleTime: ms("24h"),
  });

  //
}

export default useGeners;
