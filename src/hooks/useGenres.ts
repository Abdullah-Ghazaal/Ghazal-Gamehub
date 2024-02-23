import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

function useGeners() {
  return useData<Genre>("/genres");
}

export default useGeners;
