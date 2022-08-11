import React, { Component } from 'react';

class Resume extends Component {
  render() {
    const {name, lastname} = this.props;

    return (
      <div>
        <p> Here is a class component {name} {lastname} </p>
      </div>
    )
  }
}

export default Resume;