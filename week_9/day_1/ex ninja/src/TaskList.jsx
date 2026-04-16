import { useTaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, dispatch } = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;