import { useContext } from "react";
import { TodoContext } from "../context/todos/todoContext";

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
