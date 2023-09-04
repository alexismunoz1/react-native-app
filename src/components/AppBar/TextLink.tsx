import { StyleSheet } from "react-native";
import { Text } from "../Text";
import { Link } from "react-router-native";

interface Props {
  children: string;
  to?: string;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    paddingRight: 15,
  },
});

export const TextLink = ({ children, to }: Props) => {
  return (
    <Link to={to}>
      <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
        {children}
      </Text>
    </Link>
  );
};
