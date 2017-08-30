/**
 * @flow
 */

import type { Action } from './types'

export const TOGGLE_MUTE_ONBOARDING = 'TOGGLE_MUTE_ONBOARDING'

export type ToggleMuteOnboardingAction = {
  type: 'TOGGLE_MUTE_ONBOARDING'
}

export function toggleMuteOnboardingAction(): Action {
  return {
    type: TOGGLE_MUTE_ONBOARDING,
  }
}
