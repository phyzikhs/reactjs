import {connect} from 'react-redux'
import React, { Component } from 'react'
import { createPost } from '../actions/postActions'

class CreatePost extends Component{
    state = {
      id: "", // not the best idea
      title: "",
      body: ""
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      // console.log(this.state);
      e.preventDefault();
      if (this.state.title && this.state.body) {
        this.props.createPost({
          ...this.state,
          id: Date.now()+""
        });
        // this.props.history.push('/');
        this.setState({
          id: "",
          title: "",
          body: ""
        });
        // console.log(e);
      }
    }
    render() {
        return (
          <div className="container z-depth-1">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Write a New Post</h5>
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" value={this.state.title} id="title" onChange={this.handleChange}/>
              </div>
              <div className="input-field col s12 m6">
                <label htmlFor="body">Body</label>
                <textarea id="body" value={this.state.body} className="materialize-textarea" onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field">
                <button className="modal-close btn red lighten-1 z-depth-0">Post</button>
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