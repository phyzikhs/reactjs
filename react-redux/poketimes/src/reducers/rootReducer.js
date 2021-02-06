
const initState = {
	posts: [
		{id: '1', title: 'Squirttle laid an egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.'},
		{id: '2', title: 'Charmander laid an egg', body: 'Suspendisse fringilla sem ante, et imperdiet lectus ultricies at. Nam sed lectus nunc. Pellentesque eu orci in lorem rutrum blandit. Vivamus in leo non elit blandit elementum vel maximus ex. Curabitur posuere lacinia euismod. Nunc a tempor turpis.'},
		{id: '3', title: 'A helix fossil was found', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.'},
		
	]
}
const rootReducer = (state = initState, action) => {
	if(action.type === 'DELETE_POST'){
		let newPosts = state.posts.filter(post => {
			return post.id !== action.id;
		});
		return {
			...state,
			posts: newPosts
		}
	}
	else if(action.type === 'CREATE_POST'){
		/*let newPosts = [
			...state.posts,
			action.post
		]*/
		return {
			...state,
			posts: [...state.posts, action.post]
		}
	}
	return state;
}

export default rootReducer;