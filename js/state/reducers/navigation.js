/**
 * @flow
 */

import { AppNavigator } from '../../AppNavigator'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('VideoOnboarding')
)

export function navigation(
  state: Object = initialState,
  action: Object
): Object {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
