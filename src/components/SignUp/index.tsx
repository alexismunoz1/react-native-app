import { View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignIn } from "../../hooks/useSignIn";
import { useSignUp } from "../../hooks/useSignUp";
import { MainButton, FormikTextInput, Title } from "../UI";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: "20%",
    backgroundColor: "white",
    height: "100%",
  },
  formContainer: {
    gap: 10,
  },
});

const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username is too short")
    .max(30, "Username is too long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password is too short")
    .max(30, "Password is too long")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Password confirm is required"),
});

interface FormValues {
  username: string;
  password: string;
  passwordConfirm: string;
}

export const SignUp = () => {
  const { signIn } = useSignIn();
  const { createUser } = useSignUp();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const handleSubmit = async (values: FormValues) => {
    const { username } = await createUser(values);
    await signIn({ username, password: values.password });
    await navigate("/repositories");
  };

  return (
    <View style={styles.container}>
      <Title>Sign Up</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ submitForm }) => (
          <View style={styles.formContainer}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <FormikTextInput
              name='passwordConfirm'
              placeholder='Password confirm'
              secureTextEntry
            />
            <MainButton onPress={submitForm}>Siqn Up</MainButton>
          </View>
        )}
      </Formik>
    </View>
  );
};
