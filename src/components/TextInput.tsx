import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  errorText: {
    marginTop: 5,
  },
});

interface TextInputProps {
  style?: object;
  error?: string;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  value?: string;
}

export const TextInput = ({ style, error, ...props }: TextInputProps) => {
  const textInputStyles = [styles.textInput, style, error && styles.errorText];
  return <NativeTextInput style={textInputStyles} {...props} />;
};
