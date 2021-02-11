import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


class Navbar extends Component {
  componentDidMount() {
    // console.log('mounted');
    document.addEventListener('DOMContentLoaded', function() {
      const M = window.M;
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {});
		});
  }
  render() {
    const { auth, profile } = this.props;
    // console.log(props);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className='brand-logo'>Marioplan</Link>
        </div>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger hamburger"><i className="material-icons">menu</i></a>
        { links }
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);