import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DrawerHeader from './DrawerHeader'
import DrawerTab from './DrawerTab'

Drawer.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired
}

export default function Drawer (props) {
	console.log(props.activeFooterTab);
	return (
		<View style={styles.container}>
			<DrawerHeader />
			<DrawerTab 
				title="Home"
				selected={props.activeFooterTab === 'home'}
				onPress={() => {
					props.onTabSelect('home')
					props.close()
				}}
				iconName='ios-home-outline'
			/>
			<DrawerTab 
				title="My Tracks"
				selected={props.activeFooterTab === 'library'}
				onPress={() => {
					props.onTabSelect('library')
					props.close()
				}}
				iconName='ios-musical-notes-outline'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})