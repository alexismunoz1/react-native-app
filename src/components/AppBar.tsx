import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import { Text } from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 12,
    backgroundColor: "#24292e",
    padding: 15,
  },
  text: {
    color: "white",
    paddingRight: 15,
  },
});

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableWithoutFeedback>
          <Link to='/'>
            <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
              Repositories
            </Text>
          </Link>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Link to='/signin'>
            <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
              Sing In
            </Text>
          </Link>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};
