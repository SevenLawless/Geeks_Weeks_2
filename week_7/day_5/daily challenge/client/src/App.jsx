import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      text: "",
      response: ""
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/hello");
    const data = await res.text();
    this.setState({ message: data });
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: this.state.text })
    });

    const data = await res.text();
    this.setState({ response: data });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;