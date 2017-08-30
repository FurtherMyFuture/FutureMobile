/**
 * @flow
 */

import { createLogger } from 'redux-logger'

import { isDebuggingInChrome } from '../isDebuggingInChrome'

export const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
})
