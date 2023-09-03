import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutaciones";
import { useAuthStorage } from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [signInMutation] = useMutation(AUTH);

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const { data } = await signInMutation({
      variables: { username, password },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn];
};
