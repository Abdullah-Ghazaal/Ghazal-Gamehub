import { Button } from "@chakra-ui/react";

interface Props {
  onClearFilters: () => void;
}

function ClearFilters({ onClearFilters }: Props) {
  return (
    <Button colorScheme="red" onClick={() => onClearFilters()}>
      Clear filters
    </Button>
  );
}

export default ClearFilters;
