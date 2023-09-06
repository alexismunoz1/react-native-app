import { useParams } from "react-router-native";
import { useGetRepository } from "../../hooks/useGetRepository";
import { Text } from "../Text";
import { RepositoryItem } from "./RepositoryItem";

export const RepositoryView = () => {
  const { id } = useParams();
  const { data, loading } = useGetRepository(id);

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <RepositoryItem viewButton repository={data} />
  );
};
