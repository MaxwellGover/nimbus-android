import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, fontSizes } from '~/styles'

export default function PreSplash (props) {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>
				Nimbus
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.blue,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		color: '#fff',
		fontSize: fontSizes.logoText
	}
})