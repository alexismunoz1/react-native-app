import { View, Image, StyleSheet } from "react-native";
import { Text } from "./Text";
import { theme } from "../theme";

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 12,
  },
  imageAdnTextContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  laguage: {
    color: "white",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 4,
    marginRight: "auto",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  statsContainerText: {
    alignItems: "center",
  },
});

interface Props {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

export const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}: Props) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      const formattedCount = (count / 1000).toFixed(1);
      return `${formattedCount}k`;
    }

    return count.toString();
  };

  return (
    <View style={styles.containter}>
      <View style={styles.imageAdnTextContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text fontWeight='bold' fontSize='subheading'>
            {fullName}
          </Text>
          <Text style={{ marginTop: 4 }}>{description}</Text>
          <Text style={styles.laguage}>{language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsContainerText}>
          <Text fontWeight='bold'>{formatCount(stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statsContainerText}>
          <Text fontWeight='bold'>{formatCount(forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statsContainerText}>
          <Text fontWeight='bold'>{formatCount(reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statsContainerText}>
          <Text fontWeight='bold'>{formatCount(ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};
