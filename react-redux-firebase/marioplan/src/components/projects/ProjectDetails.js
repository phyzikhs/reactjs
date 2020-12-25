import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function ProjectDetails(props) {
  // const id = props.match.params.id;
  // console.log(props);
  // console.log(id);
  const { project } = props;
  console.log(project);
  return (project) ? (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>23rd December, 2am</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section project-details">Loading project details...</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
