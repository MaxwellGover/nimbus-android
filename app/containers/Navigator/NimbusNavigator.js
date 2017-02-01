import React, { PropTypes, Component } from 'react'
import { Navigator } from 'react-native'
import { SplashContainer } from '~/containers'

export default class NimbusNavigator extends Component {
	renderScene = (route, navigator) => {
		return <SplashContainer navigator={navigator} />
	}
	configureScene (route) => {

	}
	render () {
		return {
			<Navigator 
				initialRoute={{}}
				renderScene={this.renderScene}
				configureScene={this.configureScene}
			/>
		}
	}
}