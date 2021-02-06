import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditPen from '../images/icons8-pencil-64.png'

class FabModal extends Component {
  render() {
    return (
      <div>
        {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
        {/* <div className="fixed-action-btn top">
          <a className="btn-floating btn-large red">
          <img className="edit-pen" src={EditPen} alt=""/>
          </a>
        </div> */}
        <Link to='/new' className="btn-floating btn-large halfway-fab waves-effect waves-light red darken-3">
            <img className='fab-icon' src={EditPen} alt="New"/>
        </Link>
      </div>
    )
  }
}

export default FabModal