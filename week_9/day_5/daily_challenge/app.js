import { useState } from "react"

function Header() {
  return <h1>AutoBarista Control Panel</h1>
}

export default function App() {
  const [inventoryLevel, setInventoryLevel] = useState(10)
  const [machineStatus, setMachineStatus] = useState("Idle")

  function handleSimulateOrder() {
    if (inventoryLevel === 0) return

    setInventoryLevel((prev) => prev - 1)
    setMachineStatus("Brewing")

    setTimeout(() => {
      setMachineStatus("Delivering")

      setTimeout(() => {
        setMachineStatus("Idle")
      }, 3000)
    }, 3000)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Inventory Level: {inventoryLevel}</h2>
        <h2>Machine Status: {machineStatus}</h2>

        {inventoryLevel > 0 ? (
          <button onClick={handleSimulateOrder}>Simulate Order</button>
        ) : (
          <p style={{ color: "red" }}>Out of Cups! Please Restock.</p>
        )}
      </main>
    </div>
  )
}