import React from "react";
import "./style.css";
import Hello from './Components/Hello'
import Message from './Components/Message';
import Profile from './Components/Profile';
import Counter from './Components/Counter';
import Resume from './Components/Resume';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Hello />
      <Message messagecode="26" messagecontent="This is from a class component" />
      <p>Start editing to see some magic happen :)</p>
      <Profile name="Joshua" lastname="Alhassan" >
        <p>Learning about props in reactjs</p>
      </Profile>

      <Resume name="Ruth" lastname="Alhassan" />

      {/* Counter Increament component using state */}
      <Counter />
    </div>
  );
}
