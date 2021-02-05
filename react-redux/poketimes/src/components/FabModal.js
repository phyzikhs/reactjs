import React, { Component } from 'react'
import EditPen from '../images/icons8-pencil-64.png'

class FabModal extends Component {
  render() {
    return (
      <div>
        {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
          <img className="edit-pen" src={EditPen} alt=""/>
          </a>
        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    )
  }
}

export default FabModal