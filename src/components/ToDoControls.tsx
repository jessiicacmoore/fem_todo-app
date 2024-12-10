import ClearCompleteButton from "./ClearCompleteButton";
import RemainingCount from "./RemainingCount";
import ToDoFilter from "./ToDoFilter";

type ToDoControlsProps = {
  listId: string;
};

function ToDoControls({ listId }: ToDoControlsProps) {
  return (
    <div className="flex justify-between gap-4 text-light-gray-300 dark:text-dark-gray-300">
      <RemainingCount />
      <div className="hidden md:block">
        <ToDoFilter />
      </div>
      <ClearCompleteButton listId={listId} />
    </div>
  );
}

export default ToDoControls;
