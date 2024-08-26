import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import PlatformMenu from "./PlatformMenu";

interface GamesGridProps {
  selectedGenre: Genre | null
}

const GamesGrid = ({selectedGenre}:GamesGridProps) => {
  
  
  const loadingSkeletons = [1, 2, 3, 4, 5, 6];

  const { error, data:games, isLoading } = useGames(selectedGenre);

  return (
    <>
      {error && <Text>{error}</Text>}
      <PlatformMenu />
   
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="10px">
         {isLoading &&
          loadingSkeletons.map((item) => <GameCardSkeleton key={item} />)}
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
