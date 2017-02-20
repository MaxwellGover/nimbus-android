import React, { PropTypes, Component } from 'react'
import { Navigator } from 'react-native'
import { SplashContainer, FooterTabsContainer } from '~/containers'
import { Preview, PreSplash } from '~/components'

export default class NimbusNavigator extends Component {
	static propTypes = {
		isAuthed: PropTypes.bool.isRequired
	}
	renderScene = (route, navigator) => {
		if (this.props.isAuthed === false) {
			return <SplashContainer navigator={navigator} />
		} else if (route.name === 'Preview') {
			return <Preview navigator={navigator} />
		}
		return <FooterTabsContainer navigator={navigator} />
	}
	configureScene = (route) => {
		return Navigator.SceneConfigs.PushFromRight
	}
	render () {
		return (
			<Navigator
				initialRoute={{name: 'PreSplash'}}
				renderScene={this.renderScene}
				configureScene={this.configureScene}
			/>
		)
	}
}
