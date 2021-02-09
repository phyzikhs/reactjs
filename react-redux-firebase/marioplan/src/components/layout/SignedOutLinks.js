import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right desktop-nav">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  );
}

export default SignedOutLinks;