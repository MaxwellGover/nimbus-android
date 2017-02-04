// Keeps track of which tab is active

const SET_FOOTER_TAB = 'SET_FOOTER_TAB'

// Action creator. Pass in type and any other info you want to provide to the reducer
export function setFooterTab (tab) {
	return {
		type: SET_FOOTER_TAB,
		tab
	}
}

const initialState = 'home'

export default function activeFooterTab (state = initialState, action) {
	switch (action.type) {
		case SET_FOOTER_TAB : 
			return action.tab

		default : 
			return state
	}
}