import React, { PropTypes } from 'react'
import { Text, StyleSheet, DrawerLayoutAndroid } from 'react-native'
import { HomeContainer, TrackLibraryContainer } from '~/containers'
import Drawer from './Drawer'

FooterTabs.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	navigator: PropTypes.object.isRequired
}

export default function FooterTabs (props) {
	console.log(props);
	const closeDrawer = () => this.drawer.closeDrawer()
	return (
		<DrawerLayoutAndroid
			ref={(drawer) => this.drawer = drawer}
			drawerWidth={290}
			renderNavigationView={() => (
				<Drawer 
					close={closeDrawer}
					activeFooterTab={props.activeFooterTab}
					onTabSelect={props.onTabSelect}
				/>
		)}>
			{props.activeFooterTab === 'home'
				? <HomeContainer navigator={props.navigator}/>
				: <TrackLibraryContainer navigator={props.navigator}/>
			}
		</DrawerLayoutAndroid>
	)
}