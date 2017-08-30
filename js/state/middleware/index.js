/**
 * @flow
 */

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { logger } from './logger'

export const middleware = applyMiddleware(thunk, logger)
