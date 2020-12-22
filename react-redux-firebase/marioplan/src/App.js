import React, { Component } from 'react'
import { BrouserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrouserRouter>
        <div className="App">
          <h1>Marioplan</h1>
        </div>
      </BrouserRouter>
    )
  }
}

export default App;
