
const initState = {
	posts: [
		{
			id: '1',
			title: 'Squirttle laid an egg',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.',
			likes: 352,
			comments: 25,
			like: false,
		},
		{
			id: '2',
			title: 'Second post 2',
			body: 'Suspendisse fringilla sem ante, et imperdiet lectus ultricies at. Nam sed lectus nunc. Pellentesque eu orci in lorem rutrum blandit. Vivamus in leo non elit blandit elementum vel maximus ex. Curabitur posuere lacinia euismod. Nunc a tempor turpis.',
			likes: 98,
			comments: 6,
			like: true
		},
		{
			id: '3',
			title: 'A helix fossil was found',
			body: 'Consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.',
			likes: 76,
			comments: 3,
			like: false
		},
		
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
		let newPost = {
			...action.post,
			likes: 0,
			comments: 0,
			like: false
		}
		return {
			...state,
			posts: [...state.posts, newPost]
		}
	}
	else if(action.type === 'TOGGLE_LIKE'){
		let i=0;
		for (i = 0; i < state.posts.length; i++) {
			if(state.posts[i].id === action.id) break;
		}
		if (state.posts[i].like) {
			state.posts[i].like = false;
			--state.posts[i].likes;
		}
		else if (!state.posts[i].like) {
			state.posts[i].like = true;
			++state.posts[i].likes;
		}
		// console.log(state.posts[i].like);
	}
	return state;
}

export default rootReducer;