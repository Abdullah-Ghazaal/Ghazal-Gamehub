import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryParamStore from "../services/store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const onSearch = useGameQueryParamStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
          ref.current.value = "";
          navigate("/");
        }
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
