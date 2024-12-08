import { useTodos } from "../hooks/useTodos";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const { todos } = useTodos();
  return (
    <ul className="-mx-4 -mt-4">
      {todos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </ul>
  );
}

export default ToDoList;
