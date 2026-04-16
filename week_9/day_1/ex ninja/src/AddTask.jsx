import { useState } from "react";
import { useTaskContext } from "./TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;