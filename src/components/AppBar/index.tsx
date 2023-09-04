import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { useMe } from "../../hooks/useMe";
import { useSignOut } from "../../hooks/useSignOut";
import { TextLink } from "./TextLink";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 12,
    backgroundColor: "#24292e",
    padding: 15,
  },
});

export const AppBar = () => {
  const { data } = useMe();
  const { signOut } = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <TextLink to='/'>Repositories</TextLink>
        </Pressable>
        {data?.me ? (
          <Pressable onPress={signOut}>
            <TextLink>Sign Out</TextLink>
          </Pressable>
        ) : (
          <Pressable>
            <TextLink to='/signin'>Sign In</TextLink>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};
