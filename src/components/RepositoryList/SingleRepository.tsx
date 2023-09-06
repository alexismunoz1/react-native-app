import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { Text } from "../Text";
import { RepositoryInfo } from "./RepositoryInfo";
import { useGetReviews } from "../../hooks/useGetReviews";
import { useGetRepository } from "../../hooks/useGetRepository";
import { ReviewItem } from "./ReviewItem";

export const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useGetRepository(id);
  const { reviews } = useGetReviews(id);

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data} viewButton />}
    />
  );
};
