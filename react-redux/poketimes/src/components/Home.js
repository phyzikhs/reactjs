import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PokeballImg from '../pokeball.png'

class Home extends Component {
	state = {
		posts: []
	}
	componentDidMount () {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			console.log(res);
			this.setState({
				posts: res.data.slice(0, 11)
			})
		});
	}
	render() {
		const posts = this.state.posts
		const postList = posts.length ? (
			posts.map(post => {
				return(
					<div className="container post card" key={post.id}>
						<img src={PokeballImg} alt="A pokeball"/>
						<div className="card-content">
							<Link to={"/"+post.id}>
								<span className="card-title red-text">{post.title}</span>
							</Link>
							<p>{post.body}</p>
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

export default Home;