/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
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
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
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
    backgroundColor: 'transparent',
    flex: 1,
  },
})

AppRegistry.registerComponent('Future', () => Future);
