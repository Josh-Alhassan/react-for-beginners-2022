import React from 'react';
import './../style.css';

function FunctionEvent() {

  const handleClick = () => {
    console.log('Button is Clicked');
  }

  return (
    <div>
      <h1> Functional Event </h1>
      <button onClick={ handleClick} >Click Me</button>
    </div>
  )
}

export default FunctionEvent;