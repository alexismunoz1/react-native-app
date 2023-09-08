import { StyleSheet, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import { useSignOut } from "../../hooks/useSignOut";
import { useCurrentUser } from "../../hooks/useCurrentUser";
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
  const { user } = useCurrentUser();
  const { signOut } = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.content}>
        <TextLink to='/'>Repositories</TextLink>
        {!user?.username && (
          <>
            <TextLink to='/signin'>Sign In</TextLink>
            <TextLink to='/signup'>Sign Up</TextLink>
          </>
        )}
        {user?.username && (
          <>
            <TextLink to='/review'>Create a review</TextLink>
            <TextLink to='/myreviews'>My reviews</TextLink>
            <TextLink to='/signin' onPress={signOut}>
              Sign Out
            </TextLink>
          </>
        )}
      </ScrollView>
    </View>
  );
};
