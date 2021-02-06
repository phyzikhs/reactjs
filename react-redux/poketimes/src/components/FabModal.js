import React, { Component } from 'react'
import EditPen from '../images/icons8-pencil-64.png'
import CreatePost from './CreatePost'

class FabModal extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <a className="btn-floating btn-large halfway-fab waves-effect waves-light red darken-3 modal-trigger" href="#create">
          <img className='fab-icon' src={EditPen} alt="New"/>
        </a>

        <div id="create" className="modal">
          <CreatePost />
        </div>
      </div>
    )
  }
}

export default FabModal