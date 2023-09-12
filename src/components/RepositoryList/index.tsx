import { useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { RepositoryInfo } from "./RepositoryInfo";
import { useRepositories, orderByValue } from "../../hooks/useRepositories";
import type { Repository } from "../../lib/types";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";
import { ItemSeparator } from "../UI";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexShrink: 1,
  },
  pickerSearchContainer: {
    padding: 10,
    gap: 10,
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryListContainer = ({ repositories }: RepositoryListProps) => {
  const renderRepositoryItem = ({ item: repo }: { item: Repository }) => (
    <RepositoryInfo key={repo.id} repository={repo} />
  );

  return (
    <FlatList
      style={styles.container}
      data={repositories}
      ItemSeparatorComponent={() => <ItemSeparator height={12}/>}
      renderItem={renderRepositoryItem}
    />
  );
};

export const RepositoryList = () => {
  const [orderByValue, setOrderByValue] = useState<orderByValue>("CREATED_AT");
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);
  const { data } = useRepositories(orderByValue, debouncedValue);

  return (
    <>
      <View style={styles.pickerSearchContainer}>
        <View>
          <TextInput
            style={styles.searchInput}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder='Search'
          />
        </View>
        <Picker
          style={styles.picker}
          selectedValue={orderByValue}
          onValueChange={setOrderByValue}>
          <Picker.Item label='Latest repositories' value='CREATED_AT' />
          <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE_DESC' />
          <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE' />
        </Picker>
      </View>
      <RepositoryListContainer repositories={data} />
    </>
  );
};
