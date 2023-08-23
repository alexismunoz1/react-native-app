import { StyleSheet, View } from "react-native";
import { RepositoriList } from "./RepositoryList";
import { AppBar } from "./AppBar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

export const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoriList />
    </View>
  );
};
