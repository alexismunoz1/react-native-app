import { Text as NativeText, StyleSheet } from "react-native";
import { theme } from "../../lib/theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface TextProps {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fontSizes;
  fontWeight?: keyof typeof theme.fontWeights;
  style?: object;
  children: string | number;
}

export const Text = ({
  color,
  fontSize,
  fontWeight,
  style,
  children,
  ...props
}: TextProps) => {
  const textStyles = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return (
    <NativeText style={textStyles} {...props}>
      {children}
    </NativeText>
  );
};
