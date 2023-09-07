import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Text";
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

interface Props {
  children: string;
  onPress: () => void;
  style?: object;
}

export const MainButton = ({ children, onPress, style }: Props) => {
  const textStyles = [styles.container, style];

  return (
    <Pressable onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </Pressable>
  );
};
