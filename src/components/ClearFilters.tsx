import { Button } from "@chakra-ui/react";
import useGameQueryParamStore from "../services/store";

function ClearFilters() {
  const clearFilters = useGameQueryParamStore((s) => s.clearFilters);

  return (
    <Button colorScheme="red" onClick={() => clearFilters()}>
      Clear filters
    </Button>
  );
}

export default ClearFilters;
