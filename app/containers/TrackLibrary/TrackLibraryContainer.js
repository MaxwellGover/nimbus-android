import React, { PropTypes, Component } from 'react'
import { TrackLibrary } from '~/components'

export default class TrackLibraryContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired
	}
	render () {
		return (
			<TrackLibrary />
		)
	}
}