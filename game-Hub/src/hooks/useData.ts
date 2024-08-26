import { DependencyList, useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResultSchema<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: DependencyList 
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResultSchema<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps? [...deps]:[]); // Concatenate dependencies

  return { data, error, isLoading };
};

export default useData;
