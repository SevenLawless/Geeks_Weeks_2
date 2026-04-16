import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise3 from "./Exercise3";

function App() {
  const myElement = <h1>I Love JSX</h1>;
  const sum = 5 + 5;

  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favoriteAnimals: ["Panda", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      <p>Hello world!</p>
      {myElement}
      <p>React is {sum} times better with JSX</p>
      <h2>{user.firstName}</h2>
      <h2>{user.lastName}</h2>
      <UserFavoriteAnimals favoriteAnimals={user.favoriteAnimals} />
      <Exercise3 />
    </div>
  );
}

export default App;