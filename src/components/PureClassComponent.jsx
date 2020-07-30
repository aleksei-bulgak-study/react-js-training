import React, { PureComponent } from 'react';

export default class PureClassComponent extends PureComponent {
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
      <div className="component">
        <p>
          Hello world from class extended from PureComponent
          {' '}
          {counter}
        </p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}