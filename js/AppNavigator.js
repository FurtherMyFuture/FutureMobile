/**
 * @flow
 */

import { StackNavigator } from 'react-navigation'

import { VideoOnboardingSceneContainer } from './scenes/Onboarding/VideoOnboarding/VideoOnboardingSceneContainer'
import { OnboardingMatchingScene } from './scenes/Onboarding/OnboardingMatching/OnboardingMatchingScene'

const AppRouteConfigs = {
  VideoOnboarding: {
    screen: VideoOnboardingSceneContainer,
  },
  OnboardingMatching: {
    screen: OnboardingMatchingScene,
  },
}

export const AppNavigator = StackNavigator(AppRouteConfigs, {
  headerMode: 'none',
})
