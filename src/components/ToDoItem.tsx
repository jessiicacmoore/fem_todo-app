import { Todo } from "../context/todos/todoReducer";
import ToDoDeleteButton from "./ToDoDeleteButton";
import ToDoToggleButton from "./ToDoToggleButton";

type ToDoItemProps = {
  todo: Todo;
};

function ToDoItem({ todo }: ToDoItemProps) {
  return (
    <li>
      <ToDoToggleButton todo={todo} />
      <span>{todo.text}</span>
      <ToDoDeleteButton todo={todo} />
    </li>
  );
}

export default ToDoItem;
