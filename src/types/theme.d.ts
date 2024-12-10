import { THEME } from "../constants/theme";

export type ThemeType = (typeof THEME)[keyof typeof THEME];

export type ThemeContextType = {
  themeState: ThemeType;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};