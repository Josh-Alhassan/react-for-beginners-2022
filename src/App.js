import React from "react";
import "./style.css";
import Hello from './Components/Hello'
import Message from './Components/Message';
import Profile from './Components/Profile';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Hello />
      <Message />
      <p>Start editing to see some magic happen :)</p>
      <Profile name="Joshua" lastname="Alhassan" >
        <p>Learning about props in reactjs</p>
      </Profile>
    </div>
  );
}
