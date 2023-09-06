import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

export const useGetRepository = (repositoryId: string) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
  });

  return { data: data?.repository, error, loading };
};
