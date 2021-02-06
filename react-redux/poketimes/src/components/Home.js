import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PokeballImg from '../pokeball.png'

class Home extends Component {
	render() {
		console.log(this.props);
		const posts = this.props.posts;
		console.log(posts);
		const postList = (posts.length) ? (
			posts.map(post => {
				return(
					<div className="container post card" key={post.id}>
						<Link to={"/"+post.id}>
							<img src={PokeballImg} alt="A pokeball"/>
							<div className="card-content">
									<span className="card-title red-text">{post.title}</span>
								<p>{post.body}</p>
							</div>
						</Link>
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

export default connect(mapStateToProps)(Home);