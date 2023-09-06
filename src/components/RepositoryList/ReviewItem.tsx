import { View } from "react-native";
import { Text } from "../Text";
import type { Review } from "../../lib/types";

interface Props {
  review: Review;
}

export const ReviewItem = ({ review }: Props) => {
  const { rating, text, user } = review;
  return (
    <View>
      <Text>{rating}</Text>
      <Text>{text}</Text>
      <Text>{user.username}</Text>
    </View>
  );
};
