const GET_PATH = 'GET_PATH'
const CLEAR_PATH = 'CLEAR_PATH'

initialState = {
	videoPath: ''
}

export function getPath (path) {
	return {
		type: GET_PATH,
		path
	}
}

export function clearPath () {
	return {
		type: CLEAR_PATH
	}
}

export default function camera (state = initialState, action) {
	switch (action.type) {
		case GET_PATH : 
			return {
				...state,
				videoPath: action.path
			}
		case CLEAR_PATH : 
			return {
				...state,
				videoPath: ''
			}
		default : 
			return state
	}
}