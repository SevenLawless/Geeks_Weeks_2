import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <BuggyCounter />
    </div>
  );
}

export default App;