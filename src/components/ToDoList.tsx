import { useTodos } from "../hooks/useTodos";
import { filterTodos } from "../utils/todos";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import ToDoItem from "./ToDoItem";
import ToDoControls from "./ToDoControls";

function ToDoList() {
  const { todos, filter, dispatch } = useTodos();
  const filteredToDos = filterTodos(todos, filter);

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;

    if (!destination) return;

    dispatch({
      type: "MOVE_TODO",
      payload: {
        sourceIndex: source.index,
        destinationIndex: destination.index,
      },
    });
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {({ droppableProps, innerRef, placeholder }) => (
            <ul
              {...droppableProps}
              id="todo-list"
              ref={innerRef}
              className="-mx-4 -mt-4 mb-4"
            >
              {filteredToDos.map((todo, index) => (
                <Draggable
                  key={todo.id.toString()}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {({ draggableProps, dragHandleProps, innerRef }) => (
                    <ToDoItem
                      todo={todo}
                      ref={innerRef}
                      {...draggableProps}
                      {...dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <ToDoControls listId="todo-list" />
    </>
  );
}

export default ToDoList;
