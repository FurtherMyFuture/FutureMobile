/**
 * @flow
 */

import React from 'react'

import { StyleSheet, View } from 'react-native'

import { VideoComponent } from 'VideoComponent'

import { MuteButton } from './MuteButton'
import { PushToMatchingGameButton } from './PushToMatchingGameButton'

type Props = {
  muted: boolean,
  toggleMuteAction: () => void,
  pushMatchingScene: () => void
}

export function VideoOnboardingScene(props: Props): React.Element<any> {
  return (
    <View style={styles.container}>
      <VideoComponent
        source={require('./assets/video/apprentice.mp4')}
        muted={props.muted}
      >
        <View style={styles.buttons}>
          <MuteButton
            onPress={props.toggleMuteAction}
            muted={props.muted}
            testID="onboarding-mute-button"
          />
          <PushToMatchingGameButton
            onPress={props.pushMatchingScene}
            testID="onboarding-matching-button"
          />
        </View>
      </VideoComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  buttons: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    flex: 1,
  },
})
