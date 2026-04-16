import React from "react";
import data from "./data.json";

class Example1 extends React.Component {
  render() {
    return (
      <ul>
        {data.socialMedias.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Example1;