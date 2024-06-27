import { memo } from "react";
import { useStore } from "./store";
import TodoItem from "./TodoItem";

const selectTodos = (state) => state.todo;

const TodoList = () => {
  const todos = useStore(selectTodos);
  const MemoTodoItem = memo(TodoItem);
  return (
    <div>
      {todos.map((todo) => (
        <MemoTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
