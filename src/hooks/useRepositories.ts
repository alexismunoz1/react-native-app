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

export type orderByValue = "CREATED_AT" | "RATING_AVERAGE" | "RATING_AVERAGE_DESC";

export const useRepositories = (orderByValue?: orderByValue, searchKeyword?: string) => {
  let orderBy = "CREATED_AT";
  let orderDirection: "ASC" | "DESC" = "ASC";

  if (orderByValue === "RATING_AVERAGE" || orderByValue === "RATING_AVERAGE_DESC") {
    orderBy = "RATING_AVERAGE";
    orderDirection = orderByValue === "RATING_AVERAGE_DESC" ? "DESC" : "ASC";
  }

  const { data, error, loading } = useQuery<ApiResponse>(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
  });

  const repositories = data?.repositories?.edges?.map(({ node }) => node);

  return { data: repositories, error, loading };
};
