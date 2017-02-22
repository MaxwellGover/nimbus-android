import React, { PropTypes, Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import { connect } from 'react-redux'
import { getPath } from '~/redux/modules/camera'

class NimbusCamera extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }
  state = {
    camera: {
      aspect: Camera.constants.Aspect.fill,
      captureTarget: Camera.constants.CaptureTarget.disk,
      type: Camera.constants.Type.front,
      captureMode: Camera.constants.CaptureMode.video,
      captureAudio: true,
      flashMode: Camera.constants.FlashMode.auto
    },
    isRecording: false,
    timeLeft: 30,
    reachedLimit: false
  }
  startTimer = () => {
    console.log('Starting timer...')
    const countdown = () => {
      console.log('Running countdown...')
      if (this.state.timeLeft === 0) {
        clearTimeout(timerId);
        this.setState({isRecording: false})
        this.setState({reachedLimit: true})
        // Push to preview screen.
      } else {
        console.log('Decrementing...')
        this.setState({timeLeft: this.state.timeLeft - 1});
      }   
    }
    let timerId = setInterval(countdown, 1000);
  }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          type={this.state.camera.type}
          captureAudio={this.state.camera.captureAudio}
          flashMode={this.state.camera.flashMode}
          >
          <Text>{this.state.timeLeft}</Text>
          <Text style={styles.capture} onPress={this.startRecording.bind(this)}>[CAPTURE]</Text>
          <Text style={styles.capture} onPress={this.stopRecording.bind(this)}>[STOP]</Text>
          <Text style={styles.capture} onPress={this.switchType.bind(this)}>[SWITCH]</Text>
          <Text style={styles.capture} onPress={this.switchFlash.bind(this)}>[FLASH]</Text>
        </Camera>
      </View>
    );
  }

  startRecording = () => {
    if (this.camera) {
      this.startTimer();
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
          .then((data) => this.props.dispatch(getPath(data.path)))
          .catch(err => console.error(err));
      this.setState({
        isRecording: true
      });
    }
  }

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
      this.props.navigator.push({
        preview: true
      })
    }
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }
}

export default connect()(NimbusCamera)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});