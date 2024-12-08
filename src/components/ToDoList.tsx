import { useTodos } from "../hooks/useTodos";

function ToDoList() {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <p>{todo.text}</p>
      ))}
    </ul>
  );
}

export default ToDoList;
