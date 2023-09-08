import { View } from "react-native";

interface Props {
  height: number;
}

export const ItemSeparator = ({ height }: Props) => {
  return <View style={{ height }} />;
};
