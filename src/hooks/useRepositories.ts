import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
import type { Repository } from "../types";

interface ApiResponse {
  repositories: {
    edges: {
      node: Repository;
    }[];
  };
}

export const useRepositories = () => {
  const { data, error, loading } = useQuery<ApiResponse>(GET_REPOSITORIES);

  const repositories = data?.repositories?.edges.map((edge) => edge.node);

  return { data: repositories, error, loading };
};
