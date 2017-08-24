/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video';
import { VideoComponent } from 'VideoComponent'

export default class Future extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoComponent
          source={require('./assets/video/apprentice.mp4')}
          muted={true}
          >
          <View/>
        </VideoComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

AppRegistry.registerComponent('Future', () => Future);
