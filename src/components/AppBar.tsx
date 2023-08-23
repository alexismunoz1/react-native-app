import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import { Text } from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 12,
    backgroundColor: "#24292e",
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
});

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Text fontSize='subheading' fontWeight='bold' style={{ color: "white" }}>
          Repositories
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
