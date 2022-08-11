import React from 'react';

const name = 'Joshua Alhassan';

const displayMessage = () => {
  return " I need help understanding react";
}
const Hello = () => {
  return (
    <>
      <h1> What's Up World </h1>
      <p> My name is {name} and {displayMessage()}</p>
      <p> I can do 2 + 2 = {2+2} </p>
    </>
  )
}

export default Hello;