import { useTheme } from "../hooks/useTheme";
import { THEME } from "../constants/theme";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

function ThemeToggle() {
  const { themeState, toggleTheme } = useTheme();
  const isLightTheme = themeState === THEME.LIGHT;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLightTheme}
      aria-label={
        isLightTheme ? "Switch to dark theme" : "Switch to light theme"
      }
      title={isLightTheme ? "Switch to dark theme" : "Switch to light theme"}
    >
      <img
        src={isLightTheme ? iconSun : iconMoon}
        alt={
          isLightTheme
            ? "Sun icon representing light theme"
            : "Moon icon representing dark theme"
        }
      />
    </button>
  );
}

export default ThemeToggle;
