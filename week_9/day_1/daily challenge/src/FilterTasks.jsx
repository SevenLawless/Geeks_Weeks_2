import { useTaskContext } from "./TaskContext";

function FilterTasks() {
  const { dispatch } = useTaskContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
        All
      </button>
      <button onClick={() => dispatch({ type: "SET_FILTER", payload: "active" })}>
        Active
      </button>
      <button onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}>
        Completed
      </button>
    </div>
  );
}

export default FilterTasks;