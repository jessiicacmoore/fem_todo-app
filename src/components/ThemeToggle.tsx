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
        src={isLightTheme ? iconMoon : iconSun}
        alt={
          isLightTheme
            ? "Moon icon representing dark theme"
            : "Sun icon representing light theme"
        }
      />
    </button>
  );
}

export default ThemeToggle;
