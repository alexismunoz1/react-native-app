import { View, Image, StyleSheet } from "react-native";
import { Text } from "../Text";
import { theme } from "../../theme";
import { TextStatsCount } from "./TextStatsCount";

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginBottom: 12,
    marginHorizontal: 12,
  },
  imageAdnTextContainer: {
    flexDirection: "row",
  },
  containerUserInfo: {
    flex: 1,
    gap: 8,
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
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
});

interface Props {
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
  return (
    <View testID='repositoryItem' style={styles.containter}>
      <View style={styles.imageAdnTextContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
        <View style={styles.containerUserInfo}>
          <Text fontWeight='bold' fontSize='subheading'>
            {fullName}
          </Text>
          <Text>{description}</Text>
          <Text style={styles.laguage}>{language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <TextStatsCount stat={stargazersCount} text={"Stars"} />
        <TextStatsCount stat={forksCount} text={"Forks"} />
        <TextStatsCount stat={reviewCount} text={"Reviews"} />
        <TextStatsCount stat={ratingAverage} text={"Rating"} />
      </View>
    </View>
  );
};
