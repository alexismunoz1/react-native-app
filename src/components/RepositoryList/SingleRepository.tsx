import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { Text, ItemSeparator } from "../UI";
import { ReviewItem } from "../Reviews/ReviewItem";
import { RepositoryInfo } from "./RepositoryInfo";
import { useGetReviews } from "../../hooks/useGetReviews";
import { useGetRepository } from "../../hooks/useGetRepository";
import { Review } from "../../lib/types";

export const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useGetRepository(id);
  const { data: reviews } = useGetReviews(id);

  const renderReviewItem = ({ item: review }: { item: Review }) => (
    <ReviewItem review={review} />
  );

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={renderReviewItem}
      ItemSeparatorComponent={() => <ItemSeparator height={10} />}
      ListHeaderComponent={() => (
        <RepositoryInfo style={{ marginBottom: 10 }} repository={data} viewButton />
      )}
    />
  );
};
