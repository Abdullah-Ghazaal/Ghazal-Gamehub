import useGeners from "./useGenres";

function useFindGenre(id?: number) {
  const { data: genres } = useGeners();
  return genres?.results.find((genre) => genre.id === id);
}

export default useFindGenre;
