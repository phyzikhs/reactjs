const initState = {
  notifications: [
    {id: '1', user: 'Ngelemar Weapons', content: 'joined the party', time: new Date()},
    {id: '2', user: 'Ngelemar Weapons', content: 'joined the party', time: new Date()},
    {id: '3', user: 'Ngelemar Weapons', content: 'joined the party', time: new Date()},
  ]
}
const notifReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      console.log('Created notification', action.notification);
      return state;
    case 'CREATE_NOTIFICATION_ERROR':
      console.log('Error occurred creating notification', action.err);
      return state;
    default:
      return state;
  }
}

export default notifReducer;