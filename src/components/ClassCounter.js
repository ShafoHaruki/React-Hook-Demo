import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times.`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title...");
      document.title = `You clicked ${this.state.count} times.`;
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#D291BC" }}>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.incrementCount}>
          ClassCounter Count is {this.state.count} (Click to increment)
        </button>
      </div>
    );
  }
}

export default ClassCounter;
