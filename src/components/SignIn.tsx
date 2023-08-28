import { Text } from "./Text";
import { Pressable, View } from "react-native";
import { Formik } from "formik";
import { FormikTextInput } from "./FormikTextInput";

const SingInForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export const SignIn = () => {
  return (
    <>
      <Text>SignIn</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};
