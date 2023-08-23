import { View, Text, Image } from "react-native";

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
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}: Props) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{forksCount}</Text>
      <Text>{stargazersCount}</Text>
      <Text>{ratingAverage}</Text>
      <Text>{reviewCount}</Text>
      <Image source={{ uri: ownerAvatarUrl }} style={{ width: 50, height: 50 }} />
    </View>
  );
};
