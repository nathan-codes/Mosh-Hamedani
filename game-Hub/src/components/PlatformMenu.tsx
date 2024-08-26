import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

const PlatformMenu = () => {
  const { data: parent_platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {parent_platforms.map((platform) => (
          <MenuItem key={platform.id}> {platform.name} </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
