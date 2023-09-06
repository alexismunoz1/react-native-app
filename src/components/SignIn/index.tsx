import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignIn } from "../../hooks/useSignIn";
import { FormikTextInput } from "./FormikTextInput";
import { Text } from "../Text";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5, "Password is too short").required("Password is required"),
});

export const SignIn = () => {
  const { signIn } = useSignIn();
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };

  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      const { username, password } = values;
      await signIn({ username, password });
      navigate("/repositories");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Text>SignIn</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ submitForm }) => (
          <>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <Pressable onPress={submitForm}>
              <Text>Submit</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </>
  );
};
