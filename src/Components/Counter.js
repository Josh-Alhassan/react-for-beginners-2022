import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  // Add increament Method
  increament() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  // Add Decreament Method
  decreament() {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  // Add Multiplication Method
  multiplyByTwo() {
    this.setState({
      counter: this.state.counter * 2,
    })
  }

  render() {
    return (
      <div>
        <h2> Count value is: {this.state.counter} </h2>
        <button onClick={() => this.increament()} > Increament </button>
        <button onClick={() => this.decreament()} > Decreament </button>
        <button onClick={() => this.multiplyByTwo()} > MultiplyByTwo</button>
      </div>
    )
  }
}

export default Counter;