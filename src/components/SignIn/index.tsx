import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignIn } from "../../hooks/useSignIn";
import { MainButton, Text, FormikTextInput } from "../UI";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: "20%",
    backgroundColor: "white",
  },
  title: {
    marginBottom: 20,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    gap: 10,
  },
});

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
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ submitForm }) => (
          <View style={styles.formContainer}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <MainButton onPress={submitForm}>Submit</MainButton>
          </View>
        )}
      </Formik>
    </View>
  );
};
