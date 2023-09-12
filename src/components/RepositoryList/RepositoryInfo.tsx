import { View, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import * as Linking from "expo-linking";
import { Text, MainButton, TextStatsCount } from "../UI";
import { theme } from "../../lib/theme";
import type { Repository } from "../../lib/types";

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
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
  repository: Repository;
  style?: object;
  viewButton?: boolean;
}

export const RepositoryInfo = ({ repository, viewButton, style }: Props) => {
  const {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url,
  } = repository;

  const navigateToRepository = () => {
    const repositoryUrl = url;
    Linking.openURL(repositoryUrl);
  };

  return (
    <Link to={`/repository/${id}`}>
      <View testID='repositoryItem' style={[styles.containter, style]}>
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
        {viewButton && (
          <MainButton onPress={navigateToRepository} style={{ marginTop: 15 }}>
            Open in GitHub
          </MainButton>
        )}
      </View>
    </Link>
  );
};
