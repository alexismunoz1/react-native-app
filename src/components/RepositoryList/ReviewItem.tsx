import { View, StyleSheet } from "react-native";
import { format } from "date-fns";
import { Text } from "../Text";
import type { Review } from "../../lib/types";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  rating: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    fontWeight: "bold",
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    borderWidth: 3,
  },
});

interface Props {
  review: Review;
}

export const ReviewItem = ({ review }: Props) => {
  const { rating, text, createdAt, user } = review;
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <View>
      <Text style={styles.rating}>{rating}</Text>
      <View>
        <Text>{user.username}</Text>
        <Text>{formattedDate}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
