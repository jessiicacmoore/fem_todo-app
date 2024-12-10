import { useTodos } from "../hooks/useTodos";
import FilterButton from "./ui/FilterButton";

function ToDoFilter() {
  const { filter, dispatch } = useTodos();

  function handleFilterChange(newFilter: "all" | "active" | "completed") {
    dispatch({ type: "SET_FILTER", payload: newFilter });
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filter Todos"
        className="flex flex-wrap justify-center gap-4"
      >
        <FilterButton
          label="All"
          isActive={filter === "all"}
          onClick={() => handleFilterChange("all")}
        />
        <FilterButton
          label="Active"
          isActive={filter === "active"}
          onClick={() => handleFilterChange("active")}
        />
        <FilterButton
          label="Completed"
          isActive={filter === "completed"}
          onClick={() => handleFilterChange("completed")}
        />
      </div>
      <div aria-live="polite" className="sr-only">
        <p>{`Showing ${filter} todos.`}</p>
      </div>
    </>
  );
}

export default ToDoFilter;
