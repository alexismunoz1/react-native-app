import { useApolloClient } from "@apollo/client";
import { useAuthStorage } from "./useAuthStorage";

export const useSignOut = () => {
  const { removeAccessToken } = useAuthStorage();
  const { resetStore } = useApolloClient();

  const signOut = async () => {
    await removeAccessToken();
    await resetStore();
  };

  return { signOut };
};
