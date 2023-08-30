import { Pressable, View } from "react-native";
import { FormikTextInput } from "../FormikTextInput";
import { Text } from "../Text";

export const SingInForm = ({ onSubmit }: { onSubmit: () => void }) => {
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
