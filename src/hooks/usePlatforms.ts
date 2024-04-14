import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";

function usePlatforms() {
  //

  return useQuery<Platform[], Error>({
    ////
    queryKey: ["platforms"],
    ////
    queryFn: () => platformService.get(),
    ////
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

  //
}

export default usePlatforms;
