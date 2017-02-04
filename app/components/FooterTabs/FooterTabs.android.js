import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, DrawerLayoutAndroid } from 'react-native'

FooterTabs.propTypes = {

}

export default function FooterTabs (props) {
	return (
		<DrawerLayoutAndroid
			drawerWidth={290}
			renderNavigationView={() => (
				<Text>The drawer</Text>
			)}
		>

		</DrawerLayoutAndroid>
	)
}