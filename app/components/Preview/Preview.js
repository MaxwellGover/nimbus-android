import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Video from 'react-native-video'

class Preview extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		videoPath: PropTypes.string.isRequired
	}
	render () {
		return (
			<Video
				source={{uri: this.props.videoPath}}   // Can be a URL or a local file.
       			ref={(ref) => {
         			this.player = ref
       			}}
       			muted={false}                           
       			paused={false}                         
       			resizeMode="cover"
       			repeat={true}  
			></Video>
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