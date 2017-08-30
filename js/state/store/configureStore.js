/**
 * @flow
 */

import type { Store } from 'redux'
import { compose, createStore } from 'redux'

import { composeWithDevTools } from 'remote-redux-devtools'

import { middleware } from '../middleware'
import { reducers } from '../reducers'

import { isDebuggingInChrome } from '../isDebuggingInChrome'

export function configureStore(): Store<*, *> {
  const composeEnhancers = isDebuggingInChrome
    ? composeWithDevTools({ realtime: true })
    : compose
  const enhancers = composeEnhancers(middleware)
  return createStore(reducers, undefined, enhancers)
}
