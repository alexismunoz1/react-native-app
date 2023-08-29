import { Platform } from "react-native";

export const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    danger: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({ ios: "Arial", android: "Roboto", default: "sans-serif" }),
  },
  fontWeights: {
    normal: "400" as const,
    bold: "700" as const,
  },
};
