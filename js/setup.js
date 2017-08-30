/**
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'

import { App } from './App'
import { configureStore } from './state/store/configureStore'

export function setup(): () => React.Element<any> {
  const store = configureStore()

  return () =>
    <Provider store={store}>
      <App />
    </Provider>
}
