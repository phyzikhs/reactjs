import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createNotification } from '../../store/actions/notifActions'
import {createProject} from '../../store/actions/projectActions'
class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createProject(this.state);
    this.props.createNotification({
      user: this.props.profile.firstName+" "+this.props.profile.lastName,
      content: "created a project",
    })
    this.props.history.push('/')
  }
  render() {
    const { auth } = this.props;
    return auth.uid ? (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="maretialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    ) : (
      <Redirect to='/signin' />
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    createNotification: (notification) => dispatch(createNotification(notification))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)