import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme={"green"} onChange={toggleColorMode} />
      <Text>{colorMode === "light" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
