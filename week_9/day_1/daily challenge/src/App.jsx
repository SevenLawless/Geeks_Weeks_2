import { TaskProvider } from "./TaskContext";
import AddTask from "./AddTask";
import FilterTasks from "./FilterTasks";
import TaskList from "./TaskList";

function App() {
  return (
    <TaskProvider>
      <h1>Enhanced Task Manager</h1>
      <AddTask />
      <FilterTasks />
      <TaskList />
    </TaskProvider>
  );
}

export default App;