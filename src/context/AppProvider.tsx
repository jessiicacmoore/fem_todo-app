import { ThemeProvider } from "./theme/ThemeContext";
import { TodoProvider } from "./todos/todoContext";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
