import { Todo } from "../context/todos/todoReducer";

export function filterTodos(todos: Todo[], filter: string): Todo[] {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}