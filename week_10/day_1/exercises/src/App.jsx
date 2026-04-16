import { useState } from "react"
import quotes from "./quotes"

function getRandomIndex(currentIndex) {
  let newIndex = Math.floor(Math.random() * quotes.length)

  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * quotes.length)
  }

  return newIndex
}

function getRandomColor() {
  const colors = [
    "#0f766e",
    "#7c3aed",
    "#2563eb",
    "#dc2626",
    "#ea580c",
    "#16a34a",
    "#db2777",
    "#0891b2"
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

export default function App() {
  const firstIndex = Math.floor(Math.random() * quotes.length)

  const [quoteIndex, setQuoteIndex] = useState(firstIndex)
  const [bgColor, setBgColor] = useState(getRandomColor())
  const [textColor, setTextColor] = useState(getRandomColor())
  const [buttonColor, setButtonColor] = useState(getRandomColor())

  function handleNewQuote() {
    setQuoteIndex(getRandomIndex(quoteIndex))
    setBgColor(getRandomColor())
    setTextColor(getRandomColor())
    setButtonColor(getRandomColor())
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center"
        }}
      >
        <h1 style={{ color: textColor }}>{quotes[quoteIndex].quote}</h1>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          {quotes[quoteIndex].author || "Unknown"}
        </p>
        <button
          onClick={handleNewQuote}
          style={{
            marginTop: "20px",
            backgroundColor: buttonColor,
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          New quote
        </button>
      </div>
    </div>
  )
}