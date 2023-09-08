import { FlatList, View, StyleSheet } from "react-native";
import { ReviewItem } from "./ReviewItem";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Review } from "../../types";
import { ItemSeparator, Title } from "../UI";

const styles = StyleSheet.create({
  container: {
    paddingVertical: "10%",
  },
});

export const MyReviews = () => {
  const { reviews } = useCurrentUser(true);

  const renderReviewItem = ({ item: review }: { item: Review }) => (
    <ReviewItem review={review} />
  );

  return (
    <View style={styles.container}>
      <Title>My Reviews</Title>
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        renderItem={renderReviewItem}
        ItemSeparatorComponent={() => <ItemSeparator height={12} />}
      />
    </View>
  );
};
