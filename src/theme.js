import { createContext, useContext } from "react";

export const lightColors = {
  background: "#f5f5f5",
  card: "#ffffff",
  text: "#111111",
  subtext: "#777777",
  border: "#aaaaaa",
  input: "#ffffff",
  accent: "green",
  accentSoft: "#d9f5e0",
  tabBar: "#ffffff",
  chip: "#e0e0e0",
};

export const darkColors = {
  background: "#121212",
  card: "#1e1e1e",
  text: "#f2f2f2",
  subtext: "#a0a0a0",
  border: "#555555",
  input: "#2a2a2a",
  accent: "#3cb371",
  accentSoft: "#1f3a28",
  tabBar: "#1e1e1e",
  chip: "#333333",
};

export const ThemeContext = createContext({
  colors: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}