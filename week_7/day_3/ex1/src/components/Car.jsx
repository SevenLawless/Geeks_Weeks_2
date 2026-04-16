import { useState } from "react";
import Garage from "./Garage";

function Car({ carInfo }) {
  const [color] = useState("red");

  return (
    <div>
      <h1>This car is a {color} {carInfo.name}</h1>
      <p>It is a {carInfo.model}</p>
      <Garage size="small" />
    </div>
  );
}

export default Car;