import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
	handleSignIn = () => {
		// Sign in user with Twitter
	}
	render () {
		return (
			<Splash />
		)
	}
}
