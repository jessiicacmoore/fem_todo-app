import { Todo } from "../types/todos";
import { useTodos } from "../hooks/useTodos";
import CheckCircle from "./ui/CheckCircle";

type ToDoItemProps = {
  todo: Todo;
};

function ToDoToggleButton({ todo }: ToDoItemProps) {
  const { id, completed, text } = todo;
  const { dispatch } = useTodos();

  return (
    <button
      type="button"
      aria-pressed={completed}
      aria-label={`Mark ${text} as ${completed ? "incomplete" : "complete"}`}
      onClick={() => dispatch({ type: "TOGGLE_TODO", payload: id })}
    >
      <CheckCircle completed={completed} />
    </button>
  );
}

export default ToDoToggleButton;
