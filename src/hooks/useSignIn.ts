import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutaciones";
import { useAuthStorage } from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

interface SignInProps {
  username: string;
  password: string;
}

interface ApiResponse {
  authenticate: {
    accessToken: string;
  };
}

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [signInMutation, result] = useMutation<ApiResponse>(AUTH);

  const signIn = async ({ username, password }: SignInProps) => {
    const { data } = await signInMutation({
      variables: { username, password },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return { signIn, result };
};
