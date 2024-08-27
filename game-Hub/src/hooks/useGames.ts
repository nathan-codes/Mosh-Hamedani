import { GameQuery } from "../App";
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
  search: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
