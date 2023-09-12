import { FlatList, View, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useDeleteReview } from "../../hooks/useDeleteReview";
import { ItemSeparator, MainButton, Title } from "../UI";
import { ReviewItem } from "./ReviewItem";
import type { Review } from "../../lib/types";

const styles = StyleSheet.create({
  container: {
    paddingVertical: "10%",
  },
  reviewContainer: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 14,
    gap: 30,
  },
});

export const MyReviews = () => {
  const { reviews, refetchReviews } = useCurrentUser(true);
  const { deleteReview } = useDeleteReview();
  const navigate = useNavigate();

  const navigateToRepository = (id: string) => {
    navigate(`/repository/${id}`);
  };
  const showDeleteAlert = (id: string) => {
    Alert.alert("Delete Review", "Are you sure you want to delete this review?", [
      { text: "CANCEL", style: "cancel" },
      {
        text: "DELETE",
        onPress: () => {
          deleteReview(id);
          refetchReviews();
        },
      },
    ]);
  };

  const renderReviewItem = ({ item: review }: { item: Review }) => (
    <View style={styles.reviewContainer}>
      <ReviewItem review={review} />
      <View style={styles.buttonContainer}>
        <MainButton onPress={() => navigateToRepository(review.repositoryId)}>
          View repository
        </MainButton>
        <MainButton onPress={() => showDeleteAlert(review.id)} bgColor='red'>
          Delete review
        </MainButton>
      </View>
    </View>
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
