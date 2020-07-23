import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <p>
          Hello world from class extended from Component
          {' '}
          {counter}
        </p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default ClassComponent;
