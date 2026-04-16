import React from "react";
import data from "./data.json";

class Example3 extends React.Component {
  render() {
    return (
      <div>
        {data.experiences.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <a href="#">{item.name}</a>
            <h4>{item.role}</h4>
            <p>{item.date}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;