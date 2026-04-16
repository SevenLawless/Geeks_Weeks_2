import React from "react";
import FormComponent from "./FormComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isNutsFree: false,
      isLactoseFree: false,
      isVegan: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  }

  render() {
    return (
      <div>
        <FormComponent
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          isNutsFree={this.state.isNutsFree}
          isLactoseFree={this.state.isLactoseFree}
          isVegan={this.state.isVegan}
          handleChange={this.handleChange}
        />

        <h1>Entered information:</h1>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Nuts free: {this.state.isNutsFree ? "Yes" : "No"}</p>
        <p>Lactose free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
        <p>Vegan meal: {this.state.isVegan ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default App;