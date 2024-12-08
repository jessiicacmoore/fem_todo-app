export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "CLEAR_COMPLETED_TODOS" };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "CLEAR_COMPLETED_TODOS":
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
}
