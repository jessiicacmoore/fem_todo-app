import { useTodos } from "../hooks/useTodos";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const { todos } = useTodos();
  return (
    <ul className="bg-light-gray-100">
      {todos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </ul>
  );
}

export default ToDoList;
