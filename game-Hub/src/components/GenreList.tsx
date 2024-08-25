import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImages(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"5px"}
              />
              <Text fontSize={"lg"}> {genre.name} </Text>{" "}
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
