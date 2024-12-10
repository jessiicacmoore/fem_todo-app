import React, { createContext, useReducer, useEffect, ReactNode } from "react";
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

function getInitialTodos(): Todo[] {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : defaultTodos;
}

const initialState: TodoState = {
  todos: getInitialTodos(),
  filter: "all",
};

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, filter: state.filter, dispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
}
