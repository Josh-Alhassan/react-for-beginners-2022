// Importing React, Component from 'react'
import React from 'react';
import { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div> 
        <h2> Thi is a class component </h2>
        <p> MESSAGE: {this.props.messagecode} {this.props.messagecontent} </p>
      </div>
    )
  }
}

export default Message;