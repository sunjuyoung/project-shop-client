import { useStore } from "./store";

const selectRemoveTodo = (state) => state.removeTodo;
const selectToggleTodo = (state) => state.toggleTodo;

const TodoItem = ({ todo }) => {
  const removeTodo = useStore(selectRemoveTodo);
  const toggleTodo = useStore(selectToggleTodo);

  return (
    <>
      <div>TodoItem</div>
      <div>
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.done}
        />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {" "}
          {todo.title}
        </span>

        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      </div>
    </>
  );
};

export default TodoItem;
