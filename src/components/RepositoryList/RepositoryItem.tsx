import { View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import { Text } from "../Text";
import { theme } from "../../theme";
import { TextStatsCount } from "./TextStatsCount";
import * as Linking from "expo-linking";
import { Repository } from "../../lib/types";

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
  button: {
    color: "white",
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
  },
});

interface Props {
  viewButton?: boolean;
  repository: Repository;
}

export const RepositoryItem = ({ viewButton, repository }: Props) => {
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
        {viewButton && (
          <View>
            <Pressable onPress={navigateToRepository}>
              <Text style={styles.button}>Open in GitHub</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Link>
  );
};
