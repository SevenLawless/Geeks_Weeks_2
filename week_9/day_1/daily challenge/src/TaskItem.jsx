import { useRef, useState } from "react";
import { useTaskContext } from "./TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const saveEdit = () => {
    const newText = inputRef.current.value;

    if (!newText.trim()) return;

    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, text: newText },
    });

    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />

      {isEditing ? (
        <>
          <input type="text" defaultValue={task.text} ref={inputRef} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;