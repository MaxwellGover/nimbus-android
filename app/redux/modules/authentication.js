// Handles authentication state

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

import firebase from 'firebase'
import { firebaseAuth } from '~/config/constants'
import OAuthManager from 'react-native-oauth';

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
		const manager = new OAuthManager('Nimbus')
		const config =  {
  			twitter: {
    			consumer_key: '2IboL8koeWm8dJxBAG92nY99n',
    			consumer_secret: 'QP2pkjmFtXzvX5BpEaHIwlGj709BCZBPD5sF3YbTiA00pcnksq'
  			},
		}
		manager.configure(config);
        manager.authorize('twitter', {scopes: 'profile email'})
            .then(resp => {
            	firebaseAuth.signInWithCustomToken(resp.response.credentials.access_token).catch(error => {
  					// Handle Errors here.
  					var errorCode = error.code;
  					var errorMessage = error.message;
  					// ...
				});
            })
            .catch(err => console.log('There was an error'));
	}
}

// Check to see if user is authed and set initial state accordingly.
export function onAuthChange (user) {
	return function (dispatch) {
		if (!user) {
			dispatch(notAuthed())
		} else {
			const { providerData, uid } = user
			dispatch(isAuthed(uid))
		}
	}
}

// Set initial state

const initialState = {
	isAuthed: true, // Change back to false
	isAuthenticating: false, // Change back to true
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