import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { ParentPlatform } from "./hooks/usePlatforms";
import PlatformMenu from "./components/PlatformMenu";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
  order: string;
  search: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <Navbar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box marginX={"15px"}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={"10px"}>
            <PlatformMenu
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedOrder={gameQuery.order}
              onOrderSelect={(order) => setGameQuery({ ...gameQuery, order })}
            />
          </HStack>

          <GamesGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
