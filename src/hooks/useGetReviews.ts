import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";
import type { Review } from "../types";

interface ApiResponse {
  repository: {
    id: string;
    fullName: string;
    reviews: {
      edges: {
        node: Review;
      }[];
    };
  };
}

export const useGetReviews = (repositoryId: string) => {
  const { loading, error, data } = useQuery<ApiResponse>(GET_REVIEWS, {
    variables: { repositoryId },
  });

  const reviews = data?.repository.reviews.edges.map((edge) => edge.node);

  return { data: reviews, error, loading };
};
