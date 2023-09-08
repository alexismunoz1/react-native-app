import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import { AppBar } from "./AppBar";
import { SignIn } from "./SignIn";
import { RepositoryList } from "./RepositoryList";
import { SingleRepository } from "./RepositoryList/SingleRepository";
import { CreateReview } from "./Reviews/CreateReview";
import { SignUp } from "./SignUp";
import { MyReviews } from "./Reviews/MyReviews";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexShrink: 1,
    height: "100%",
  },
});

export const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/repository/:id' element={<SingleRepository />} />
        <Route path='/review' element={<CreateReview />} />
        <Route path='/myreviews' element={<MyReviews />} />
      </Routes>
    </View>
  );
};
