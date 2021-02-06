import './index'
import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom' //as Router, Route, NavLink
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from "./components/Post";
import CreatePost from './components/CreatePost'
import FabModal from './components/FabModal'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <FabModal />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/new" component={CreatePost} />
            <Route exact path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
