import ClearCompleteButton from "./ClearCompleteButton";
import RemainingCount from "./RemainingCount";

type ToDoControlsProps = {
  listId: string;
};

function ToDoControls({ listId }: ToDoControlsProps) {
  return (
    <div className="flex justify-between text-light-gray-300 dark:text-dark-gray-300">
      <RemainingCount />
      <ClearCompleteButton listId={listId} />
    </div>
  );
}

export default ToDoControls;
