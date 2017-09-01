/**
 * @flow
 */

import { AsyncStorage } from 'react-native'
import { compose, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import { composeWithDevTools } from 'remote-redux-devtools'

import { middleware } from '../middleware'
import { reducers } from '../reducers'

import { isDebuggingInChrome } from '../isDebuggingInChrome'

export function configureStore(
  onComplete?: (err?: any, result?: Object) => void
): Store {
  const composeEnhancers = isDebuggingInChrome
    ? composeWithDevTools({ realtime: true })
    : compose
  const enhancers = composeEnhancers(middleware)
  const store = createStore(
    reducers,
    undefined,
    compose(enhancers, autoRehydrate())
  )

  persistStore(
    store,
    {
      storage: AsyncStorage,
    },
    onComplete
  )

  return store
}
