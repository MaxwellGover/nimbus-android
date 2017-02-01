// New root file for application
import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { NimbusNavigator } from '~/containers'

export default class AppContainer extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<NimbusNavigator />
			</View>
		)
	}
}