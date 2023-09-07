import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import type { Repository } from "../types";

interface ApiResponse {
  repository: Repository;
}

export const useGetRepository = (repositoryId: string) => {
  const { loading, error, data } = useQuery<ApiResponse>(GET_REPOSITORY, {
    variables: { repositoryId },
  });
  const repository = data?.repository;

  return { data: repository, error, loading };
};
