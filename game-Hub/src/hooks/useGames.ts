
import useData from "./useData";
import { Genre } from "./useGenres";

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



const useGames = (selectedGenre :Genre|null) => useData<Game>("/games", {params:{ genres:selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;
