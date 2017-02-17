import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'
import { FooterTabs } from '~/components'
import { connect } from 'react-redux'
// Import setFooterTab function to allow presentational component to change tabs.
import { setFooterTab } from '~/redux/modules/activeFooterTab'

class FooterTabsContainer extends Component {
	static propTypes = {
		activeFooterTab: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	}
	render () {
		return (
			<FooterTabs 
				navigator={this.props.navigator} 
				activeFooterTab={this.props.activeFooterTab}
				dispatch={this.props.dispatch}
				setFooterTab={setFooterTab}
			/>
		)
	}
}

function mapStateToProps ({activeFooterTab}) {
	return {
		activeFooterTab
	}
}

// Component automatically receives dispatch prop when connected to re
export default connect(mapStateToProps)(FooterTabsContainer)
