import { useTodos } from "../hooks/useTodos";
import ToDoItem from "./ToDoItem";
import ToDoControls from "./ToDoControls";

function ToDoList() {
  const { todos } = useTodos();
  const listId = "todo-list";

  return (
    <>
      <ul id={listId} className="-mx-4 -mt-4 mb-4">
        {todos.map((todo) => (
          <ToDoItem todo={todo} />
        ))}
      </ul>
      <ToDoControls listId={listId} />
    </>
  );
}

export default ToDoList;
