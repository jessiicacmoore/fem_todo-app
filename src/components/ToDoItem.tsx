import React from "react";
import classNames from "classnames";
import { Todo } from "../types/todos";
import ToDoDeleteButton from "./ToDoDeleteButton";
import ToDoToggleButton from "./ToDoToggleButton";

type ToDoItemProps = {
  todo: Todo;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const ToDoItem = React.forwardRef<HTMLLIElement, ToDoItemProps>(
  ({ todo, ...props }, ref) => {
    const textClasses = classNames("flex-grow", {
      "line-through text-light-gray-300 dark:text-dark-gray-300":
        todo.completed,
    });

    return (
      <li
        ref={ref}
        className="flex justify-between gap-4 border-b border-light-gray-200 p-4 align-middle dark:border-dark-gray-400 dark:text-dark-gray-100"
        {...props}
      >
        <ToDoToggleButton todo={todo} />
        <span className={textClasses}>{todo.text}</span>
        <ToDoDeleteButton todo={todo} />
      </li>
    );
  },
);

export default ToDoItem;
