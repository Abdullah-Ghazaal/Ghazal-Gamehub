import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

function useGeners() {
  return useData<Genre>("/genres");
}

export default useGeners;
