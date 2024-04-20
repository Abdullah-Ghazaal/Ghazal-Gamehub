import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryParamsStore {
  gameQuery: GameQuery;
  setGenreID: (genreID: number) => void;
  setPlatformID: (PlatformID: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (text: string) => void;
  clearFilters: () => void;
}

const useGameQueryParamStore = create<GameQueryParamsStore>((set) => ({
  gameQuery: {},
  ////
  setGenreID: (id) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, genreID: id } })),
  ////
  setPlatformID: (id) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, platformID: id } })),
  ////
  setSortOrder: (order) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, sortOrder: order } })),
  ////
  setSearchText: (text) => set(() => ({ gameQuery: { searchText: text } })),
  ////
  clearFilters: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryParamStore;
