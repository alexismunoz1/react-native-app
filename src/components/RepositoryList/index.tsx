import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RepositoryInfo } from "./RepositoryInfo";
import { useRepositories, orderByValue } from "../../hooks/useRepositories";
import { Text } from "../UI";
import type { Repository } from "../../types";
import { Picker } from "@react-native-picker/picker";

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
    <RepositoryInfo key={repo.id} repository={repo} />
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
  const [orderByValue, setOrderByValue] = useState<orderByValue>("CREATED_AT");
  const { data, loading } = useRepositories(orderByValue);

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <>
      <Picker selectedValue={orderByValue} onValueChange={setOrderByValue}>
        <Picker.Item label='Latest repositories' value='CREATED_AT' />
        <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE' />
        <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE_DESC' />
      </Picker>
      <RepositoryListContainer repositories={data} />
    </>
  );
};
