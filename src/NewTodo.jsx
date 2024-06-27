import { useState } from "react";
import { useStore } from "./store";

const selectAddTodo = (state) => state.addTodo;

const NewTodo = () => {
  const addTodo = useStore(selectAddTodo);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default NewTodo;
