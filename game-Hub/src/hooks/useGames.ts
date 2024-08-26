
import useData from "./useData";
import { Genre } from "./useGenres";
import { ParentPlatform } from "./usePlatforms";

 export interface Platform {
  platform: {
    name: string;
    slug: string;
  };
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
}



const useGames = (
  selectedGenre: Genre | null,
  selectedPlatorm: ParentPlatform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatorm?.id,
      },
    },
    [selectedGenre?.id, selectedPlatorm?.id]
  );

export default useGames;
