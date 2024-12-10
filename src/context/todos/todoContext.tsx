import React, { createContext, useReducer, ReactNode } from "react";
import { todoReducer, Todo, TodoAction, TodoState } from "./todoReducer";
import { defaultTodos } from "../../constants/defaultTodos";

type TodoContextType = {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

const initialState: TodoState = {
  todos: defaultTodos,
  filter: "all",
};

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, filter: state.filter, dispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
}
