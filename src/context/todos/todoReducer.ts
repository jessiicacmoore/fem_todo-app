export type Todo = {
  id: number;
  text: string;
  completed: boolean;
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
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" };

export type TodoState = {
  todos: Todo[];
  filter: "all" | "active" | "completed";
};

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          { id: Date.now(), text: action.payload, completed: false },
          ...state.todos,
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case "MOVE_TODO":
      const { sourceIndex, destinationIndex } = action.payload;
      const updatedToDos = Array.from(state.todos);
      const [movedItem] = updatedToDos.splice(sourceIndex, 1);

      updatedToDos.splice(destinationIndex, 0, movedItem);

      return {
        ...state,
        todos: updatedToDos,
      };
    case "CLEAR_COMPLETED_TODOS":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
