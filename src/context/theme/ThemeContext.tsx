import { createContext, useEffect, useState } from "react";
import { THEME } from "../../constants/theme";
import {
  ThemeType,
  ThemeContextType,
  ThemeProviderProps,
} from "../../types/theme";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeState, setThemeState] = useState<ThemeType>(
    () => (localStorage.getItem("theme") as ThemeType) || THEME.LIGHT,
  );

  function toggleTheme() {
    setThemeState((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    );
  }

  useEffect(
    function () {
      const root = window.document.documentElement;
      root.classList.remove(THEME.LIGHT, THEME.DARK);
      root.classList.add(themeState);
      localStorage.setItem("theme", themeState);
    },
    [themeState],
  );

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
