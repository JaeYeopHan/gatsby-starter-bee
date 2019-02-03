import _ from 'lodash'

import { setValueTo, getValueFrom } from './core'
import { sessionStorage } from './browser'

export const setValueToSessionStorage = _.partial(setValueTo, sessionStorage)
export const getValueFromSessionStorage = _.partial(
  getValueFrom,
  sessionStorage
)
