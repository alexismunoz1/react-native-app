import { Text } from "../Text";
import { Formik } from "formik";
import { SingInForm } from "./SingInForm";
import * as yup from "yup";
import { useSignIn } from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5, "Password is too short").required("Password is required"),
});

export const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    try {
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
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};
