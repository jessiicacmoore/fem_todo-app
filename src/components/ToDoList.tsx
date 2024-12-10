import { useTodos } from "../hooks/useTodos";
import ToDoItem from "./ToDoItem";
import ToDoControls from "./ToDoControls";

function ToDoList() {
  const { todos, filter } = useTodos();
  const listId = "todo-list";

  const filteredToDos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <ul id={listId} className="-mx-4 -mt-4 mb-4">
        {filteredToDos.map((todo) => (
          <ToDoItem todo={todo} />
        ))}
      </ul>
      <ToDoControls listId={listId} />
    </>
  );
}

export default ToDoList;
