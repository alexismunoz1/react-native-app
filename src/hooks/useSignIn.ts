import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutaciones";

export const useSingIn = () => {
  const [Auth, result] = useMutation(AUTH);

  const singIn = async ({ username, password }) => {
    return await Auth({ variables: { username, password } });
  };

  return [singIn, result];
};
