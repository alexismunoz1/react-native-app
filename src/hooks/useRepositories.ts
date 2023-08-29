import { useState, useEffect } from "react";
import type { Repository } from "../lib/types";

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository>();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const url = "http://192.168.100.42:5000/api/repositories";
    const response = await fetch(url);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
