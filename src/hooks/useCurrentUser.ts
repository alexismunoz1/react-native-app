import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { Review } from "../types";

interface ApiResponse {
  me: {
    id: string;
    username: string;
    reviews?: {
      edges: {
        node: Review;
      }[];
    };
  };
}

export const useCurrentUser = (includeReviews = true) => {
  const { data } = useQuery<ApiResponse>(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  const reviews = data?.me?.reviews?.edges?.map((edge) => edge.node) ?? [];

  return { user: data?.me, reviews };
};
