import { Text } from "../Text";
import { Formik } from "formik";
import { SingInForm } from "./SingInForm";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8, "Password is too short").required("Password is required"),
});

export const SignIn = () => {
  return (
    <>
      <Text>SignIn</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};
