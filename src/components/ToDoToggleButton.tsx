import { Todo } from "../context/todos/todoReducer";
import { useTodos } from "../hooks/useTodos";
import checkIcon from "../assets/images/icon-check.svg";

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
      className="bg-light-gray-200 h-6 w-6 rounded-full border"
    >
      {completed && <img src={checkIcon} alt="" aria-hidden="true" />}
    </button>
  );
}

export default ToDoToggleButton;
