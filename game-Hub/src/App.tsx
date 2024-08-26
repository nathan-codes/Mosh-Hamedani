import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5px"}>
          <GenreList selectedGenre={selectedGenre}
            onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
