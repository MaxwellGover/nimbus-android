// New root file for application
import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NimbusNavigator } from '~/containers'
import { PreSplash } from '~/components'

class AppContainer extends Component {
	// Document props this component is receiving
	static propTypes = {
		isAuthenticating: PropTypes.bool.isRequired,
		isAuthed: PropTypes.bool.isRequired
	}
	componentDidMount () {
		// When App initializes check whether user is authenticated or not. 
		
	}
	render () {
		return (
			<View style={{flex: 1}}>
				{/* 
					If isAuthenticating is true show the loading scene. If not, render the Navigator component
				*/}
				{this.props.isAuthenticating === true
					? <PreSplash />
					: <NimbusNavigator isAuthed={this.props.isAuthed}/>
				}
			</View>
		)
	}
}

// Map redux state to the props of AppContainer component
function mapStateToProps ({authentication}) {
	return {
		// Props added below will go in as props to AppContainer component
		isAuthenticating: authentication.isAuthenticating,
		isAuthed: authentication.isAuthed
	}
}

export default connect(
	mapStateToProps
)(AppContainer)