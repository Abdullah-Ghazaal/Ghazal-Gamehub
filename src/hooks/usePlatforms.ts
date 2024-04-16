import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import ms from "ms";

function usePlatforms() {
  //

  return useQuery({
    ////
    queryKey: ["platforms"],
    ////
    queryFn: () => platformService.get(),
    ////
    staleTime: ms("24h"),
  });

  //
}

export default usePlatforms;
