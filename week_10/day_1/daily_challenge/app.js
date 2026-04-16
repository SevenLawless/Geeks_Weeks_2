import { useState } from "react"

export default function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState(0)

  function handleCalculate() {
    const first = Number(num1)
    const second = Number(num2)

    if (operation === "+") {
      setResult(first + second)
    } else if (operation === "-") {
      setResult(first - second)
    } else if (operation === "*") {
      setResult(first * second)
    } else if (operation === "/") {
      setResult(second !== 0 ? first / second : "Cannot divide by 0")
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      <h2>{result}</h2>
    </div>
  )
}