/**
 * @flow
 */

import { combineReducers } from 'redux'

import { onboarding } from './onboarding'
import { navigation } from './navigation'

export const reducers = combineReducers({
  onboarding,
  navigation,
})
