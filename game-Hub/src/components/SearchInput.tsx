import { Input } from "@chakra-ui/react"
import { useState } from "react";

interface SearchInputProps {
    onSearch: (searchQuery:string)=> void
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(evt) => {
          evt.preventDefault();
          onSearch(searchInput)
        console.log("Search Query", searchInput);
      }}
    >
      <Input
        variant="filled"
        value={searchInput}
        onChange={(evt) => setSearchInput(evt.target.value)}
        borderRadius={20}
        placeholder="Search games..."
      />
    </form>
  );
};

export default SearchInput
