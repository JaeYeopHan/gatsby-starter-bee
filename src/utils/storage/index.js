import {
  setValueToSessionStorage,
  getValueFromSessionStorage,
} from './sessionStorage'
import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage'

const SESSION_STORAGE_KEY = '__felog_session_storage_key__'
const LOCAL_STORAGE_KEY = '__felog_local_storage_key__'

export function getState() {
  return getValueFromSessionStorage(SESSION_STORAGE_KEY)
}

export function setState(val) {
  return setValueToSessionStorage(SESSION_STORAGE_KEY, val)
}

export function getData() {
  return getValueFromLocalStorage(LOCAL_STORAGE_KEY)
}

export function setData(val) {
  return setValueToLocalStorage(LOCAL_STORAGE_KEY, val)
}
