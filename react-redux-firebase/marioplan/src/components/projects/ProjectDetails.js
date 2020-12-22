import React from 'react'

function ProjectDetails(props) {
  console.log(props);
  const id = props.match.params.id;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium numquam ad commodi eaque. Excepturi ducimus error inventore modi aut, eos ipsam sapiente quasi magni placeat culpa rerum dolorem officiis.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Ngelemar Weapons</div>
          <div>23rd December, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
