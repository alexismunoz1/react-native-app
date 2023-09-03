import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { Text } from "./Text";
import { Link } from "react-router-native";
import { useMe } from "../hooks/useMe";
import { useSignOut } from "../hooks/useSignOut";

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
  const { data } = useMe();
  const { signOut } = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
              Repositories
            </Text>
          </Link>
        </Pressable>
        {data?.me ? (
          <Pressable onPress={() => signOut()}>
            <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
              Sign out
            </Text>
          </Pressable>
        ) : (
          <Pressable>
            <Link to='/signin'>
              <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
                Sing In
              </Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};
