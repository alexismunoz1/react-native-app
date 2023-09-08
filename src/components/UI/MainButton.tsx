import { Pressable, StyleSheet } from "react-native";
import { Text } from "./MainText";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    color: "white",
    padding: 12,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  bgColorPrimary: {
    backgroundColor: theme.colors.primary,
  },
  bgColorRed: {
    backgroundColor: theme.colors.red,
  },
});

interface Props {
  children: string;
  onPress: () => void;
  bgColor?: "primary" | "red";
  style?: object;
}

export const MainButton = ({ children, onPress, style, bgColor = "primary" }: Props) => {
  const textStyles = [
    styles.container,
    style,
    bgColor === "primary" && styles.bgColorPrimary,
    bgColor === "red" && styles.bgColorRed,
  ];

  return (
    <Pressable onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </Pressable>
  );
};
