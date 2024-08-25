
import useData from "./useData";

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



const useGames = () => useData<Game>("/games")

export default useGames;
