import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

interface ApiResponse {
  me: {
    id: string;
    username: string;
  };
}

export const useMe = () => {
  const { data } = useQuery<ApiResponse>(GET_ME, {
    fetchPolicy: "cache-and-network",
  });

  return { data };
};
