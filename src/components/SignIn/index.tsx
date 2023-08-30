import { Text } from "../Text";
import { Formik } from "formik";
import { SingInForm } from "./SingInForm";
import * as yup from "yup";
import { useSingIn } from "../../hooks/useSignIn";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5, "Password is too short").required("Password is required"),
});

export const SignIn = () => {
  const [singIn] = useSingIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await singIn({ username, password });
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Text>SignIn</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};
