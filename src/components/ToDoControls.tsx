import ClearCompleteButton from "./ClearCompleteButton";

type ToDoControlsProps = {
  listId: string;
};

function ToDoControls({ listId }: ToDoControlsProps) {
  return (
    <div className="flex justify-end text-light-gray-300 dark:text-dark-gray-300">
      <ClearCompleteButton listId={listId} />
    </div>
  );
}

export default ToDoControls;
