import React, { PropTypes } from 'react'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { HomeContainer, TrackLibraryContainer } from '~/containers'
import { NimbusCamera } from '~/components'

export default function FooterTabs (props) {
	FooterTabs.propTypes = {
		navigator: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		activeFooterTab: PropTypes.string.isRequired,
		setFooterTab: PropTypes.func.isRequired,
	}
	return (
		<Tabs>
			<Tab
				selected={props.activeFooterTab === "home"}
				titleStyle={{fontWeight: 'bold', fontSize: 10}}
				selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
				title="Home"
				onPress={(tab) => props.dispatch(props.setFooterTab("home"))}
				renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} type="ionicon" name='ios-home-outline' size={33} />}>
			<HomeContainer navigator={props.navigator}/>
			</Tab>
			<Tab
				selected={props.activeFooterTab === "camera"}
				titleStyle={{fontWeight: 'bold', fontSize: 10}}
				selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
				title="Record Preview"
				onPress={(tab) => props.dispatch(props.setFooterTab("camera"))}
				renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} type="ionicon" name='ios-camera-outline' size={33} />}>
			<NimbusCamera navigator={props.navigator}/>
			</Tab>
			<Tab
				selected={props.activeFooterTab === "library"}
				titleStyle={{fontWeight: 'bold', fontSize: 10}}
				selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
				title="Library"
				onPress={(tab) => props.dispatch(props.setFooterTab("library"))}
				renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} type="ionicon" name='ios-musical-notes-outline' size={33} />}>
			<TrackLibraryContainer navigator={props.navigator}/>
			</Tab>
		</Tabs>
	)
}