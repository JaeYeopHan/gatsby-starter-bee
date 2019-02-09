const BODY = 'body'

export const getElements = selector => document.querySelectorAll(selector)
export const getElement = selector => document.querySelector(selector)
export const addClass = (element, className) => element.classList.add(className)
export const removeClass = (element, className) =>
  element.classList.remove(className)
export const hasClass = (element, className) =>
  element.classList.contains(className)
export const getBody = () => getElement(BODY)
export const addClassToBody = className => addClass(getBody(), className)
export const removeClassToBody = className => removeClass(getBody(), className)
export const hasClassOfBody = className => hasClass(getBody(), className)
export const getRect = className =>
  getElement(className).getBoundingClientRect()
export const getPosY = className => getRect(className).y

export const getDocumentHeight = () => document.documentElement.offsetHeight
