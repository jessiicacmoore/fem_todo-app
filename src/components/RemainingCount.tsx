import { useTodos } from "../hooks/useTodos";

function RemainingCount() {
  const { todos } = useTodos();

  const complete = todos.filter((todo) => todo.completed).length;
  const countMessage = `${complete} out of ${todos.length} complete.`;

  return (
    <div aria-live="polite">
      <p className="flex flex-col" key={countMessage}>
        {countMessage}
      </p>
    </div>
  );
}

export default RemainingCount;
