import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { ParentPlatform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface PlatformMenuProps {
  onSelectPlatform: (platform: ParentPlatform) => void;
  selectedPlatform: ParentPlatform|null;
}

const PlatformMenu = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformMenuProps) => {
  const { data: parent_platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name??"Platforms"}
      </MenuButton>
      <MenuList>
        {parent_platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
