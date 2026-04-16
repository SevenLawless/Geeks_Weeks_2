import "./Exercise3.css";

function Exercise3() {
  const styleHeader = {
    color: "white",
    backgroundColor: "dodgerblue",
    padding: "20px",
    fontFamily: "Arial",
  };

  return (
    <div>
      <h1 style={styleHeader}>Styled Header</h1>
      <p className="para">This is a paragraph</p>
      <a href="https://react.dev">React Docs</a>
      <form>
        <input type="text" placeholder="Your name" />
        <button type="submit">Submit</button>
      </form>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400"
        alt="Example"
        width="200"
      />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Exercise3;