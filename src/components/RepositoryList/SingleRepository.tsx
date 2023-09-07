import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { Text } from "../Text";
import { ReviewItem } from "./ReviewItem";
import { RepositoryInfo } from "./RepositoryInfo";
import { useGetReviews } from "../../hooks/useGetReviews";
import { useGetRepository } from "../../hooks/useGetRepository";

export const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useGetRepository(id);
  const { data: reviews } = useGetReviews(id);

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => <RepositoryInfo repository={data} viewButton />}
    />
  );
};
