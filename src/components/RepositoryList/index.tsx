import { FlatList, StyleSheet } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { useRepositories } from "../../hooks/useRepositories";
import { Text } from "../Text";
import type { Repository } from "../../lib/types";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexShrink: 1,
  },
});

interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryListContainer = ({ repositories }: RepositoryListProps) => {
  const renderRepositoryItem = ({ item }) => <RepositoryItem key={item.id} {...item} />;

  return (
    <FlatList
      style={styles.container}
      data={repositories}
      renderItem={renderRepositoryItem}
    />
  );
};

export const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <RepositoryListContainer repositories={repositories} />
  );
};
