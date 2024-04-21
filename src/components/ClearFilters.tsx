import { Button } from "@chakra-ui/react";
import useGameQueryParamStore from "../services/store";

function ClearFilters() {
  const clearFilters = useGameQueryParamStore((s) => s.clearFilters);
  const searchText = useGameQueryParamStore((s) => s.gameQuery.searchText);

  return (
    <Button colorScheme="red" onClick={() => clearFilters()}>
      {searchText ? "Clear Search" : "Clear Filters"}
    </Button>
  );
}

export default ClearFilters;
