import { Text } from "../Text";
import { View } from "react-native";

interface Props {
  stat: number;
  text: string;
}

export const TextStatsCount = ({ stat, text }: Props) => {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      const formattedCount = (count / 1000).toFixed(1);
      return `${formattedCount}k`;
    }

    return count.toString();
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text fontWeight='bold'>{formatCount(stat)}</Text>
      <Text>{text}</Text>
    </View>
  );
};
