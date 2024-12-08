import React, { createContext, useEffect, useState } from "react";
import { THEME } from "../../constants/theme";

type ThemeType = (typeof THEME)[keyof typeof THEME];

type ThemeContextType = {
  themeState: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

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
