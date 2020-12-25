const initState = {
  authError: null
}
const authReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login failed');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Sign out success');
      return state;
    default:
      return state;
  }
}

export default authReducer