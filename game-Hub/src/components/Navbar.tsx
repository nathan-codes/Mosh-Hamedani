import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch  />
    </HStack>
  );
};

export default Navbar;
