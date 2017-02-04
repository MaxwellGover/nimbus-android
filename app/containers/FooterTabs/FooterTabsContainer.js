import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'
import { FooterTabs } from '~/components'
import { connect } from 'react-redux'
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
				activeFooterTab={this.props.activeFooterTab}
				onTabSelect={(tab) => {this.props.dispatch(activeFooterTab(tab))}}
				navigator={this.props.navigator}
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
