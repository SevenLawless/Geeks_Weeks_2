import { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <br />
      <br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press the ENTER key!" />
      <br />
      <br />
      <button onClick={toggleButton}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Events;