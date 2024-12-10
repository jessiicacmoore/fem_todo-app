import { useTodos } from "../hooks/useTodos";
import { formatCountMessage } from "../utils/todos";

function RemainingCount() {
  const { todos } = useTodos();

  const complete = todos.filter((todo) => todo.completed).length;
  const remaining = todos.length - complete;

  return (
    <div aria-live="polite">
      <p key={complete}>{formatCountMessage(remaining, "left")}</p>
      <p key={remaining} className="sr-only">
        {formatCountMessage(complete, "complete")}
      </p>
    </div>
  );
}

export default RemainingCount;
