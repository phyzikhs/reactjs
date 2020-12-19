import React, { Component } from "react";
import Ninjas from "./Ninjas"

function App() {
  const state = {
    ninjas:[
      {name: "Scelo", age: 22, belt: "Black", key: 1},
      {name: "Zakes", age: 21, belt: "Blue", key: 2},
      {name: "Taz", age: 20, belt: "Brown", key: 3},
    ],
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react app</h1>
        <p>Welcome :-)</p>
        <Ninjas ninjas={state.ninjas}/>
      </header>
    </div>
  );
}

export default App;
