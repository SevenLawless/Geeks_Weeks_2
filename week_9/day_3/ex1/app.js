function BaseButton({ text, color, action }) {
    return (
      <button style={{ backgroundColor: color }} onClick={action}>
        {text}
      </button>
    )
  }