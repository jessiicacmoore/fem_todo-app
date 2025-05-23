import { Todo } from "../types/todos";
import { useTodos } from "../hooks/useTodos";
import crossIcon from "../assets/images/icon-cross.svg";

type ToDoItemProps = {
  todo: Todo;
};

function ToDoDeleteButton({ todo }: ToDoItemProps) {
  const { id, completed, text } = todo;
  const { dispatch } = useTodos();

  return (
    <button
      type="button"
      aria-label={`Delete ${completed ? "complete" : "incomplete"} todo: ${text}`}
      onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
      className="min-w-6"
    >
      <img src={crossIcon} />
    </button>
  );
}

export default ToDoDeleteButton;
