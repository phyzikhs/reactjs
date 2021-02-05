import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
	console.log(props);
	/*setTimeout(() => {
        props.history.push("/about")
    }, 20002);*/
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<NavLink className="brand-logo left" to="/">Poke'Times</NavLink>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);