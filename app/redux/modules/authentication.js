// Handles authentication state

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

import firebase from 'firebase'
import { firebaseAuth } from '~/config/constants'

// Action creators 

function authenticating () {
	return {
		type: AUTHENTICATING
	}
}

function notAuthed () {
	return {
		type: NOT_AUTHED
	}
}

function isAuthed (uid) {
	return {
		type: IS_AUTHED,
		uid
	}
}

export function handleAuthWithFirebase () {
	// Redux thunk allowing us to do some async stuff by returning another function
	return function (dispatch, getState) {
		dispatch(authenticating())
		var provider = new firebase.auth.TwitterAuthProvider()
		firebaseAuth.signInWithRedirect(provider)
		firebase.auth().getRedirectResult().then(function(result) {
  			if (result.credential) {
   			// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    		// You can use these server side with your app's credentials to access the Twitter API.
    		var token = result.credential.accessToken;
    		var secret = result.credential.secret;
    		// ...
  		}
  			// The signed-in user info.
  			var user = result.user;
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
		});
	}
}

// Set initial state

const initialState = {
	isAuthed: false,
	isAuthenticating: false,
	authedId: ''
}

// Reducer

export default function authentication (state = initialState, action) {
	switch (action.type) {
		case AUTHENTICATING : 
			return {
				...state,
				isAuthenticating: true
			}
		case NOT_AUTHED : 
			return {
				isAuthenticating: false,
				isAuthed: false,
				authedId: ''
			}
		case IS_AUTHED : 
			return {
				isAuthed: true,
				isAuthenticating: false,
				authedId: action.uid
			}
		default : 
			return state
	}
}