import { FILTERS } from "../constants/filters";
import { FilterType } from "../types/todos";
import { useTodos } from "../hooks/useTodos";
import FilterButton from "./ui/FilterButton";

function ToDoFilter() {
  const { filter, dispatch } = useTodos();

  function handleFilterChange(newFilter: FilterType) {
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
          isActive={filter === FILTERS.ALL}
          onClick={() => handleFilterChange(FILTERS.ALL)}
        />
        <FilterButton
          label="Active"
          isActive={filter === FILTERS.ACTIVE}
          onClick={() => handleFilterChange(FILTERS.ACTIVE)}
        />
        <FilterButton
          label="Completed"
          isActive={filter === FILTERS.COMPLETED}
          onClick={() => handleFilterChange(FILTERS.COMPLETED)}
        />
      </div>
      <div aria-live="polite" className="sr-only">
        <p>{`Showing ${filter} todos.`}</p>
      </div>
    </>
  );
}

export default ToDoFilter;
