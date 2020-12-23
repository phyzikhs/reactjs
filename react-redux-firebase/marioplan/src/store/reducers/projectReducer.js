const initState = {
  projects: [
    {id: '1', title: 'Help me find peach', content: 'first blah blah blah'},
    {id: '2', title: 'collect all stars', content: 'second blah blah blah'},
    {id: '3', title: 'egg hunt with tazz', content: 'third blah blah blah'},
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created project', action.project);
      break;
  
    default:
      break;
  }
  return state;
}

export default projectReducer