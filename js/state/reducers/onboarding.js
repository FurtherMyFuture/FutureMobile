/**
 * @flow
 */

import { TOGGLE_MUTE_ONBOARDING } from '../actions/onboarding'

export type State = {
  isMuted: boolean
}

const initialState: State = {
  isMuted: true,
}

export function onboarding(state: State = initialState, action: Object): State {
  switch (action.type) {
    case TOGGLE_MUTE_ONBOARDING:
      return {
        isMuted: !state.isMuted,
      }
    default:
      return state
  }
}
