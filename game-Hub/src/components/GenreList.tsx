import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/getCroppedImageUrl";


interface GenreListProps {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre |null;
}

const GenreList = ({ onSelectGenre, selectedGenre }:GenreListProps) => {
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
              <Button 
                fontWeight={selectedGenre?.id === genre.id?"bold":""}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
              >

                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
