import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const loadingSkeletons = [1, 2, 3, 4, 5, 6];

  const { error, data:games, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
   
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
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
