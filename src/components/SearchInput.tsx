import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputRightElement
          children={<BsSearch />}
          paddingTop={3}
          paddingRight={3}
        />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search games..."
          variant="filled"
          padding={6}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
