import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutaciones";

interface SignInProps {
  username: string;
  password: string;
}

interface ApiResponse {
  createUser: {
    id: string;
    username: string;
  };
}

export const useSignUp = () => {
  const [createUserMutation] = useMutation<ApiResponse>(CREATE_USER);

  const createUser = async (values: SignInProps) => {
    try {
      const { username, password } = values;
      const { data } = await createUserMutation({
        variables: { user: { username, password } },
      });

      return { id: data.createUser.id, username: data.createUser.username };
    } catch (error) {
      console.error(error.message);
    }
  };

  return { createUser };
};
