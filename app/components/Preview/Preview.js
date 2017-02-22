import React, { PropTypes, Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Video from 'react-native-video'

class Preview extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		videoPath: PropTypes.string.isRequired
	}
	render () {
		return (
			<View style={styles.container}>
				<Video
					source={{uri: this.props.videoPath}}   // Can be a URL or a local file.
	       			ref={(ref) => {
	         			this.player = ref
	       			}}
	       			muted={false}                           
	       			paused={false}                         
	       			resizeMode="cover"
	       			repeat={true}
	       			style={styles.video}  
				></Video>
			</View>
		)
	}
}


function mapStateToProps ({camera}) {
	return {
		videoPath: camera.videoPath
	}
}
// If all you want to do is get access to dispatch you don't need mapStateToProps.
// connect() gives you access to dispatch automatically.
export default connect(mapStateToProps)(Preview)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	video: {
		flex: 1
	}
})