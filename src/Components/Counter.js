import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div>
        <h2> Count value is: {this.state.counter} </h2>
        <button> Click </button>
      </div>
    )
  }
}

export default Counter;