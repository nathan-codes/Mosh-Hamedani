import { Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { data: genres } = useGenres();
  return (
    <VStack>
      {genres.map((genre) => {
        return <Text> {genre.name}</Text>;
      })}
    </VStack>
  );
};

export default GenreList;
