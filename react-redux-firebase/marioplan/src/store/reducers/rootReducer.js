import authReducer from './authReducer'
import projectReducer from './projectReducer'
import notifReducer from './notifReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  notif: notifReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})
export default rootReducer