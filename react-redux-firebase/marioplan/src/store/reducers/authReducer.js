const initState = {
  authError: null
}
const authReducer = (state = initState, action) => {
  // console.log(action.type);
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
    case 'SIGNUP_SUCCESS':
      console.log('Sign up success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log('Sign up error:', action.err);
      return {
        ...state,
        authError: action.err.message
      };
    case 'PROFILE_PIC_UPLOADED':
      console.log('Profile pic updated');
      return state;
    case 'PROFILE_PIC_UPLOAD_ERROR':
      switch (action.err.code) {
        case 'storage/object-not-found':
          console.log('File does not exist');
          break;
        case 'storage/unauthorized':
          console.log('User does not have permission to access the file');
          break;
        case 'storage/canceled':
          console.log('User canceled the upload');
          break;
        case 'storage/unknown':
          console.log('Unknown storage error occurred, inspect the server response', action.err);
          break;
        default:
          console.log("Uploading failed:", action.err);
          break;
      }
    default:
      return state;
  }
}

export default authReducer