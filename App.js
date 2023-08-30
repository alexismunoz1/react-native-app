import { Main } from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./src/lib/apolloClient";
import { AuthStorage } from "./src/lib/authStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  );
}
