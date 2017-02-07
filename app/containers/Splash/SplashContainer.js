import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'
import { connect } from 'react-redux'
import { handleAuthWithFirebase } from '~/redux/modules/authentication'

class SplashContainer extends Component {
	handleSignIn = () => {
		// Sign in user with Twitter
		console.log("Signing in user with Twitter")
		this.props.dispatch(handleAuthWithFirebase())
	}
	render () {
		return (
			<Splash handleSignIn={this.handleSignIn.bind(this)}/>
		)
	}
}

// If all you want to do is get access to dispatch you don't need mapStateToProps.
// connect() gives you access to dispatch automatically.
export default connect()(SplashContainer)
