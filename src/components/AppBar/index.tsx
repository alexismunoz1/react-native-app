import { StyleSheet, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import { useMe } from "../../hooks/useMe";
import { useSignOut } from "../../hooks/useSignOut";
import { TextLink } from "./TextLink";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#24292e",
    padding: 15,
  },
  content: {
    gap: 15,
  },
});

export const AppBar = () => {
  const { data } = useMe();
  const { signOut } = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.content}>
        <TextLink to='/'>Repositories</TextLink>
        {!data?.me && (
          <>
            <TextLink to='/signin'>Sign In</TextLink>
            <TextLink to='/signup'>Sign Up</TextLink>
          </>
        )}
        {data?.me && (
          <>
            <TextLink to='/review'>Create a review</TextLink>
            <TextLink to='/signin' onPress={signOut}>
              Sign Out
            </TextLink>
          </>
        )}
      </ScrollView>
    </View>
  );
};
