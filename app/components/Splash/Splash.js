import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { fontSizes } from '~/styles'

Splash.propTypes = {
	handleSignIn: PropTypes.func.isRequired
}

export default function Splash (props) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.logo}>
					Nimbus
				</Text>
			</View>
			<View style={styles.loginContainer}>
				<Button 
					style={{
						height: 30,
						width: 180
					}}
					onPress={props.handleSignIn}
					title="Continue With Twitter"
					color="#1da1f2"
				/>
				<Text style={styles.assuranceText}>
					Don't worry, we don't post anything to Twitter
				</Text>	
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 50,
		paddingBottom: 40
	},
	logo: {
		fontSize: fontSizes.logoText,
		margin: 20,
		textAlign: 'center'
	},
	loginContainer: {
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center'
	},
	assuranceText: {
		color: '#8f8f8f',
		textAlign: 'center',
		marginTop: 15
	}
})