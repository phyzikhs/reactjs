import React, { Component } from 'react'
import { NavLink, withRouter} from 'react-router-dom'

class Navbar extends Component {
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			const M = window.M;
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {});
		});
	}
	render() {
		return (
			<div>
				<nav className="nav-wrapper red darken-3">
					<div className="container">
						<NavLink className="brand-logo left" to="/">Poke'Times</NavLink>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="large material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</div>
				</nav>
				<ul className="sidenav right red darken-3" id="mobile-demo">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		)
	}
}

export default withRouter(Navbar);

{/* <nav className="nav-wrapper red darken-3">
			<div className="container">
				<NavLink className="brand-logo left" to="/">Poke'Times</NavLink>
				<NavLink className="right links" to="/contact">Contact</NavLink>
				<NavLink className="right links" to="/about">About</NavLink>
				<NavLink className="right links" to="/">Home</NavLink>
			</div>
			<div className="dropdown-menu">
			<div className="menu-content">
			<NavLink className="links-hidden" to="/">Home</NavLink>
			<NavLink className="links-hidden" to="/about">About</NavLink>
			<NavLink className="links-hidden" to="/contact">Contact</NavLink>
			</div>
			</div>
			<a className="hamburger" onClick={showDropDown}>☰</a>
		</nav> */}
{/* <nav className="nav-wrapper red darken-3">
			<div className="container nav_content">
				<NavLink className="brand-logo left" to="/">Poke'Times</NavLink>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav> */}