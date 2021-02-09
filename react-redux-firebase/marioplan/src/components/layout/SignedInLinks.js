import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right desktop-nav">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
          {props.profile.initials}
        </NavLink></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
    
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);