import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <h1>{theme} mode</h1>
      <p>This is the theme switcher app.</p>
    </div>
  );
}

export default Content;