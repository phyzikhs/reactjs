
const initState = {
	posts: [
		{
			id: '1',
			title: 'Squirttle laid an egg',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.',
			likes: 4325,
			comments: 1599,
			commenters: [
				{id: 5, author: "Ngelemar Weapons", comment: "Great post. Definitely reccommend this"},
				{id: 6, author: "Taz Nation", comment: "Super hlpful"},
				{id: 7, author: "Sabir Jibawi", comment: "Woo hoo"},
				{id:8, author: "Loki Sarkis", comment: "Nice"},
				{id:9, author: "Megan Xavior", comment: "I commented first"},
			],
			like: false,
		},
		{
			id: '2',
			title: 'Second post 2',
			body: 'Suspendisse fringilla sem ante, et imperdiet lectus ultricies at. Nam sed lectus nunc. Pellentesque eu orci in lorem rutrum blandit. Vivamus in leo non elit blandit elementum vel maximus ex. Curabitur posuere lacinia euismod. Nunc a tempor turpis.',
			likes: 1000,
			comments: 645,
			commenters: [
				{id: 5, author: "Ngelemar Weapons", comment: "Great post. Definitely reccommend this"},
				{id: 6, author: "Taz Nation", comment: "Super hlepful"},
				{id: 7, author: "Sabir Jibawi", comment: "Woo hoo!"},
				{id:8, author: "Loki Sarkis", comment: "Nice"},
				{id:9, author: "Megan Xavior", comment: "I commented first"},
			],
			like: true
		},
		{
			id: '3',
			title: 'A helix fossil was found',
			body: 'Consectetur adipiscing elit. Aliquam augue nisi, aliquet in eleifend a, efficitur non turpis. Pellentesque porta orci a ante tincidunt, sit amet pellentesque risus cursus. Praesent sed erat ac turpis tincidunt sodales.',
			likes: 765,
			comments: 0,
			commenters: [],
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
	else if(action.type === 'ADD_NEW_COMMENT'){
		console.log(action);
		let i=0;
		for (i = 0; i < state.posts.length; i++) {
			if(state.posts[i].id === action.newComment.postID) break;
		}
		state.posts[i].commenters.push({
			id: Date.now()+"",
			author: action.newComment.author,
			comment: action.newComment.newComment
		});
		// console.log(state.posts[i].like);
	}
	return state;
}

export default rootReducer;