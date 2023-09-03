import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";
import { ApiResponseMe } from "../lib/types";

export const useMe = () => {
  const { data } = useQuery<ApiResponseMe>(GET_ME, {
    fetchPolicy: "cache-and-network",
  });

  return { data };
};
