import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
	console.log(props);
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<NavLink className="brand-logo left" to="/">Poke'Times</NavLink>
				<a href="#" data-target="mobile-demo" className="sidenav-trigger">☰</a>
				<ul className="right hide-on-med-and-down">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
				<ul className="sidenav right" id="mobile-demo">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	);
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