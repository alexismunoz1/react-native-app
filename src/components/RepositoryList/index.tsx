import { FlatList, StyleSheet, View } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { useRepositories } from "../../hooks/useRepositories";
import { Text } from "../Text";
import type { Repository } from "../../lib/types";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexShrink: 1,
  },
  ItemSeparator: {
    height: 12,
  },
});

interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryListContainer = ({ repositories }: RepositoryListProps) => {
  const renderRepositoryItem = ({ item: repo }: { item: Repository }) => (
    <RepositoryItem key={repo.id} repository={repo} />
  );

  const ItemSeparator = () => {
    return <View style={styles.ItemSeparator} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderRepositoryItem}
    />
  );
};

export const RepositoryList = () => {
  const { data, loading } = useRepositories();

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <RepositoryListContainer repositories={data} />
  );
};
