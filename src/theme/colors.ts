import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FF6767",
  primaryBright: "#E95353",
  primaryDark: "#A10000",
  secondary: "#D94545",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#F5EFEF",
  text: "#7A2A2A",
  textDisabled: "#BDC2C4",
  textSubtle: "#BA8080",
  borderColor: "#EBE9E9",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFE6E6 0%, #FFEFEF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF6A6A",
  background: "#180C0C",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#5A3F3F",
  inputSecondary: "#8D5757",
  primaryDark: "#A10000",
  tertiary: "#473535",
  text: "#FCE2E2",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5C3131 0%, #542A2A 100%)",
  },
};
