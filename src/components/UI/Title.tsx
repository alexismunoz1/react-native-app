import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};
