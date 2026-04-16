import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaScript", votes: 5 },
    { name: "Java", votes: 1 }
  ]);

  const addVote = (name) => {
    const updatedLanguages = languages.map((language) =>
      language.name === name
        ? { ...language, votes: language.votes + 1 }
        : language
    );

    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>

      {languages.map((language, index) => (
        <div key={index}>
          <span>{language.votes}</span> <span>{language.name}</span>
          <button onClick={() => addVote(language.name)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;