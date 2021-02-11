export const createNotification = (notification) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    /*const firebase = getFirebase();
    console.log(firebase);*/
    const firestore = getFirestore();
    /*const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid*/
    firestore.collection('notifications').add({
      ...notification,
      time: new Date()
    }).then( () => {
      dispatch({
        type: 'CREATE_NOTIFICATION',
        notification
      });
    }).catch((err) => {
      dispatch({
        type: 'CREATE_NOTIFICATION_ERROR',
        err
      });
    })
  }
}