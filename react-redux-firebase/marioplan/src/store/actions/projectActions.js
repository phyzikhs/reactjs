
export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFireStore}) => {
    // make async call to database
    dispatch({
      type: 'CREATE_PROJECT',
      project
    });
  }
}