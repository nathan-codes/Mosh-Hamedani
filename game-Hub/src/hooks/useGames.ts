import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { CanceledError } from "axios";
interface Game {
  id: string;
  name: string;
}

interface FetchGamesSchema {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesSchema>("/games", { signal: controller.signal })
      .then((res) => {
        return setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
