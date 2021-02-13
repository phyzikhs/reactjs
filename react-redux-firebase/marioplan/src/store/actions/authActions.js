export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then( () => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      // dispatch({type: 'SIGNUP_SUCCESS'})
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0]+newUser.lastName[0]
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'});
    }).catch(err => {
      dispatch({type: 'SIGNUP_ERROR', err})
    })
  }
}

export const uploadProfilePic = (image, progress) => {
  // console.log(image);
  return (dispatch, getState, {getFirebase, getFirestore, storage}) => {
    // console.log(getState);
    const state = getState();
    const firebase = getFirebase();
    const firestore = getFirestore();
    document.getElementById('progress-bar').style.visibility = 'visible';
    const uploadTask = storage.ref(`profiles/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        var currentProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes ) * 100
        );
        progress[0] = currentProgress;
        console.log(progress);
        document.getElementById('progress-status').style.width = progress[0]+"%";
        if (! progress[0]<=100 ) document.getElementById('progress-status').style.color = 'green';
      },
      error => {
        console.log(error);
      },
      () => {
        storage.ref('profiles')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          // console.log("Image url: ", url);
          
          // add the url to the profile data (users)
          firestore.collection('users').doc(image.name).set( // image.name = users/{uid}
            { profilePicURL: url },
            {merge: true}
          )
        }).then(() => {
          dispatch({type: 'PROFILE_PIC_UPLOADED'});
        }).catch(err => {
          dispatch({type: 'PROFILE_PIC_UPLOAD_ERROR', err})
        })
      }
    )

    // firebase.uploadFile('users/image',formData)
    // console.log(firebase)
  }
}

export const deleteProfilePic = (name) => {
  return (dispatch, getState, {getFirebase, getFirestore, storage}) => {
    // console.log(getState);
    const state = getState();
    // console.log(state);
    const firebase = getFirebase();
    const firestore = getFirestore();
    const uploadTask = storage.ref(`profiles/${name}`).delete()
      .then(() => {
        // File deleted successfully
        firestore.collection('users').doc(name).set( // image.name = users/{uid}
          { profilePicURL: null },
          {merge: true}
        )
      }).then(() => {
        dispatch({type: 'PROFILE_PIC_DELETED'});
      }).catch(err => {
        dispatch({type: 'PROFILE_PIC_DELETE_ERROR', err})
      })
  }
}