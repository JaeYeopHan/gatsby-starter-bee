import _ from 'lodash'

import { setValueTo, getValueFrom } from './core'
import { localStorage } from './browser'

export const setValueToLocalStorage = _.partial(setValueTo, localStorage)
export const getValueFromLocalStorage = _.partial(getValueFrom, localStorage)
