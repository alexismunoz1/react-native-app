import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
import type { ApiResponseRepository } from "../lib/types";

export const useRepositories = () => {
  const { data, error, loading } = useQuery<ApiResponseRepository>(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories?.edges.map((edge) => edge.node);

  return { repositories, error, loading };
};
