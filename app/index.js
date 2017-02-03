import React from 'react'
import { AppContainer } from '~/containers'
// Tell app about all reducers being exported in modules/index
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunk)
)

// Allow components inside of AppContainer to subscribe to pieces of Redux state
export default function Nimbus (props) {
  return (
  	<Provider store={store}>
    	<AppContainer />
    </Provider>
  )
}