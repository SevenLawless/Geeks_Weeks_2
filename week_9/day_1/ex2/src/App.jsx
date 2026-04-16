import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <h2>Character count: {count}</h2>
    </div>
  );
}

export default App;