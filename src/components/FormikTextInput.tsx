import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";
import { Text } from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "red",
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const textInputStyles = [showError && styles.errorInput];

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        style={textInputStyles}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};
