import Car from "./components/Car";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;