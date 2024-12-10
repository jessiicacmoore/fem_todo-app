import { FILTERS } from "../constants/filters";
import { FilterType, Todo } from "../types/todos";

export function filterTodos(todos: Todo[], filter: FilterType): Todo[] {
  switch (filter) {
    case FILTERS.ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case FILTERS.COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}
