import { View, StyleSheet } from "react-native";
import { format } from "date-fns";
import { Text } from "../UI";
import { theme } from "../../theme";
import type { Review } from "../../types";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 14,
    backgroundColor: "white",
    borderRadius: 5,
  },
  ratingCont: {
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    fontWeight: "bold",
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    borderWidth: 2,
  },
  infoCont: {
    flex: 1,
    marginLeft: 10,
    gap: 5,
  },
});

interface Props {
  review: Review;
}

export const ReviewItem = ({ review }: Props) => {
  const { rating, text, createdAt, user } = review;
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.ratingCont}>
        <Text color='primary' fontWeight='bold'>
          {rating}
        </Text>
      </View>
      <View style={styles.infoCont}>
        <Text fontWeight='bold' fontSize='subheading'>
          {user.username}
        </Text>
        <Text fontSize='body' color='textSecondary'>
          {formattedDate}
        </Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
