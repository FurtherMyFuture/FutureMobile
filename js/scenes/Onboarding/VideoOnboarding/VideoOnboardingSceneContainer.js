/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { toggleMuteOnboardingAction } from 'actions'
import { getIsOnboardingMuted } from 'selectors'

import { VideoOnboardingScene } from './VideoOnboardingScene'

type SelectProps = {
  muted: boolean
}

type Props = SelectProps & typeof actions

export function VideoOnboardingSceneBase(props: Props): React.Element<any> {
  return (
    <VideoOnboardingScene
      muted={props.muted}
      toggleMuteAction={props.toggleMuteOnboardingAction}
      pushMatchingScene={props.pushMatchingScene}
    />
  )
}

function select(state: Object): SelectProps {
  return {
    muted: getIsOnboardingMuted(state),
  }
}

const actions = {
  toggleMuteOnboardingAction,
  pushMatchingScene: () =>
    NavigationActions.navigate({ routeName: 'OnboardingMatching' }),
}

export const VideoOnboardingSceneContainer = connect(select, actions)(
  VideoOnboardingSceneBase
)
