import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: string;
  name: string;
}

interface FetchGamesSchema {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesSchema>("/games")
        .then((res) => {
          return setGames(res.data.results)
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      <div>{error && <Text>{error}</Text>}</div>
      <ul>
        {games.map((game) => {
          return <li key={game.id}> {game.name} </li>;
        })}
      </ul>
    </>
  );
};

export default GamesGrid;
