import React, { createContext, useReducer, ReactNode } from "react";
import { todoReducer, Todo, TodoAction } from "./todoReducer";
import { defaultTodos } from "../../constants/defaultTodos";

type TodoContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
