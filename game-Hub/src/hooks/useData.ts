import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { CanceledError } from "axios";

interface FetchGenresSchema<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresSchema<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        return setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
