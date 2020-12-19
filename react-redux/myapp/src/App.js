import React, { Component } from "react";
import Ninjas from "./Ninjas"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react app</h1>
        <p>Welcome :-)</p>
        <Ninjas name="Sicela" age="21" belt="Blue"/>
        <Ninjas name="Zakes" age="22" belt="Black"/>
      </header>
    </div>
  );
}

export default App;
