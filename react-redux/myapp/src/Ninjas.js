import React, { Component } from "react";

class Ninjas extends Component{
  render() {
    console.log(this.props);
    const {ninjas} = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.key}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
      )
    })
    return (
      <div className="ninja-list">
        {ninjaList}
      </div>
    )
  }
}

export default Ninjas;