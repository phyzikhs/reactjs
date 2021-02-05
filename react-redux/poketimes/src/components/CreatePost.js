import {connect} from 'react-redux'
import React, { Component } from 'react'
import { createPost } from '../actions/postActions'

class CreatePost extends Component{
    state = {
      id: Math.random()+"", // not the best idea
      title: "",
      body: ""
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
        if (this.state.title && this.state.body) {
          this.props.createPost(this.state);
          this.props.history.push('/');
        }
        else{
          e.preventDefault();
        }
    }
    render() {
        return (
          <div className="container  z-depth-1">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Write a New Post</h5>
              <div className="input-field">
                <label htmlFor="email">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="body">Body</label>
                <input type="text" id="body" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Post</button>
              </div>
            </form>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(createPost(post));
        }
    }
}
export default connect(null, mapDispatchToProps)(CreatePost);