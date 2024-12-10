import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import CheckCircle from "./ui/checkCircle";
import FloatingLabelInput from "./ui/FloatingLabelInput";

const INPUT_ID = "new-todo-input";

function NewToDoForm() {
  const [toDo, setToDo] = useState("");
  const { dispatch } = useTodos();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (toDo.trim()) {
      dispatch({ type: "ADD_TODO", payload: toDo.trim() });
      setToDo("");
    }
  }

  function handleChange(value: string) {
    setToDo(value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="-mr-4 flex items-center justify-between gap-4"
    >
      <CheckCircle />
      <FloatingLabelInput
        id={INPUT_ID}
        name="todo"
        value={toDo}
        changeHandler={handleChange}
        className="flex-grow"
      >
        Create a new todo<span aria-hidden>...</span>
      </FloatingLabelInput>
      <button
        type="submit"
        className="self-stretch rounded-r-lg bg-primary-brightBlue px-4 text-light-gray-100 hover:bg-check-gradient focus:bg-check-gradient"
      >
        Save
      </button>
    </form>
  );
}

export default NewToDoForm;
