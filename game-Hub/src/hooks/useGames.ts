import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { CanceledError } from "axios";

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

interface FetchGamesSchema {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchGamesSchema>("/games", { signal: controller.signal })
      .then((res) => {
        setLoading(false)
        return setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
