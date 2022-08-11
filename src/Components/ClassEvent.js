import React, { Component } from 'react';

class ClassEvent extends Component {
  handleClick() {
    console.log('Class based component handling')
  }

  render() {
    return (
      <div>
        <h1>Class Based Event</h1>
        <button onClick={this.handleClick} >Click Me</button>
      </div>
    )
  }
}

export default ClassEvent;