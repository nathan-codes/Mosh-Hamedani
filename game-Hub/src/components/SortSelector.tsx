import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onOrderSelect: (oder: string) => void;
  selectedOrder: string;
}

const SortItems = [
  {
    label: "Relevance",
    value: "",
  },
  {
    label: "Name",
    value: "-name",
  },
  {
    label: "Date Added",
    value: "created",
  },
  {
    label: "Release Date",
    value: "-released",
  },
  {
    label: "Popularity",
    value: "-metacritic",
  },
  {
    label: "Average rating",
    value: "-rating",
  },
];

const SortSelector = ({ onOrderSelect, selectedOrder }: SortSelectorProps) => {
  const currentOrder = SortItems.find((order) => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {SortItems.map((order) => {
          return (
            <MenuItem
              key={order.value}
              onClick={() => onOrderSelect(order.value)}
            >
              {" "}
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
