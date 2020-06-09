import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#D291BC" }}>
        <button onClick={this.incrementCount}>
          ClassCounter Count is {this.state.count} (Click to increment)
        </button>
      </div>
    );
  }
}

export default ClassCounter;
