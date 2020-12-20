import React, { Component } from "react";
import AddNinja from "./AddNinja";
import Ninjas from "./Ninjas"

class App extends Component {
  state = {
    ninjas:[
      {name: "Scelo", age: 22, belt: "Black", id: 1},
      {name: "Zakes", age: 21, belt: "Blue", id: 2},
      {name: "Taz", age: 20, belt: "Brown", id: 3},
    ],
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas  = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My first react app</h1>
          <p>Welcome :-)</p>
          <Ninjas ninjas={this.state.ninjas}/>
          <AddNinja addNinja= {this.addNinja}/>
        </header>
      </div>
    );
  }
}

export default App;
