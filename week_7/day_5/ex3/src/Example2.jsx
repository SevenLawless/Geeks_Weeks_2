import React from "react";
import data from "./data.json";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Programming Language</h3>
        <ul>
          {data.skills["Programming Language"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Web-Based Application Development</h3>
        <ul>
          {data.skills["Web-Based Application Development"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;