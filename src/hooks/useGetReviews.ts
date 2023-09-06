import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

export const useGetReviews = (repositoryId: string) => {
  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { repositoryId },
  });

  const reviews = data?.repository.reviews.edges.map((edge) => edge.node);

  return { reviews, error, loading };
};
