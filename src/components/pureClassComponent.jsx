import React, { Component, PureComponent } from "react";

export default class PureClassComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({...this.state, counter: this.state.counter + 1})
  }

  render() {
    return (
      <>
        <p>
          Hello world from class extended from PureComponent{" "}
          {this.state.counter}
        </p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
