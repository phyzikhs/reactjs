import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PokeballImg from '../pokeball.png'
import { toggleLike } from '../actions/postActions'


class Home extends Component {
	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
			const M = window.M;
			var elems = document.querySelectorAll('.dropdown-trigger');
			var instances = M.Dropdown.init(elems, {});
		});
	}
	toggleLike = (post) => {
		// console.log(this.props.toggleLike);
		this.props.toggleLike(post.id);
		// console.log(post.like);
	}
	numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	render() {
		// console.log(this.props);
		const posts = this.props.posts;
		// console.log(posts);
		const postList = (posts.length) ? (
			posts.map(post => {
				const likeColor = post.like ? "blue" : "black";
				return(
					<div className="container post card" key={post.id}>
						
						<img src={PokeballImg} alt="A pokeball"/>
						<div className="card-content">
							<Link to={"/"+post.id}>
								<span className="card-title icon-blue">{post.title}</span>
								<p>{post.body}</p>
							</Link>
							<div className="row container">
								<a href="#?" className="col s4 m2" onClick={() => {this.toggleLike(post)}}>
									<div>
										<i className={"material-icons icon-" + likeColor}>favorite</i>
									</div>
									<p>{this.numberWithCommas(post.likes)}</p>
								</a>
								<Link to={"/"+post.id} className="col s4 m2">
								<div>
									<i className="material-icons icon-black">chat</i>
								</div>
								<p>{this.numberWithCommas(post.comments)}</p>
							</Link>
								<a className='dropdown-trigger col s4 m2' href='#' data-target='dropdown1'>
									<i className="material-icons icon-black">share</i>
								</a>
							</div>
							<ul id='dropdown1' className='dropdown-content'>
								<li><a href="#!">one</a></li>
								<li><a href="#!">two</a></li>
								<li><a href="#!">three</a></li>
								<li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
								<li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
							</ul>
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No posts yet!</div>
		);
		return (
			<div>
				<h4 className="center">Home</h4>
				{postList}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		toggleLike: (id) => {
					dispatch(toggleLike(id));
			}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);