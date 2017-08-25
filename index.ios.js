/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, StatusBar, StyleSheet, View } from 'react-native'
import { VideoComponent } from 'VideoComponent'
import React, { Component } from 'react'

const add = (a: string, b: number): number => a + b

add(1, 2)

export function Future(): Component<any> {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <VideoComponent source={require('./assets/video/apprentice.mp4')} muted>
        <View />
      </VideoComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
})

AppRegistry.registerComponent('Future', () => Future)
