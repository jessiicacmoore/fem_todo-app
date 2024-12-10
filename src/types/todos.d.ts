import { FILTERS } from "../constants/filters";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type FilterType = (typeof FILTERS)[keyof typeof FILTERS];

export type TodoState = {
  todos: Todo[];
  filter: FilterType;
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | {
      type: "MOVE_TODO";
      payload: { sourceIndex: number; destinationIndex: number };
    }
  | { type: "CLEAR_COMPLETED_TODOS" }
  | { type: "SET_FILTER"; payload: FilterType };

export type TodoContextType = {
  todos: Todo[];
  filter: FilterType;
  dispatch: React.Dispatch<TodoAction>;
};
