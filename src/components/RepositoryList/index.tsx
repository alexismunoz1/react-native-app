import { FlatList, View, StyleSheet } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { useRepositories } from "../../hooks/useRepositories";
import { Text } from "../Text";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexShrink: 1,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  const renderRepository = ({ item }) => <RepositoryItem key={item.id} {...item} />;

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      style={styles.container}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderRepository}
    />
  );
};
