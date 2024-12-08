import { useTodos } from "../hooks/useTodos";

type ClearCompleteButtonProps = {
  listId: string;
};

function ClearCompleteButton({ listId }: ClearCompleteButtonProps) {
  const { dispatch } = useTodos();

  return (
    <button
      type="button"
      aria-controls={listId}
      aria-label="Clear all completed todos"
      onClick={() => dispatch({ type: "CLEAR_COMPLETED_TODOS" })}
      className="hover:text-light-gray-500 focus:text-light-gray-500 dark:hover:text-dark-gray-100 dark:focus:text-dark-gray-100"
    >
      Clear Completed
    </button>
  );
}

export default ClearCompleteButton;
