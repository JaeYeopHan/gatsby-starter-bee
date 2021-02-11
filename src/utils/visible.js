import * as Dom from './dom'

const ROOT_ID = '#___gatsby'
export const TARGET_CLASS = 'observed'
const VISIBLE_RECOGNIZE_CLASS = 'visible'
const INTERSECTION_OBSERVER_ROOT_MARGIN = '20px'
const INTERSECTION_OBSERVER_THRESHOLD = 0.8

let observer

function observeCallback(entries) {
  return entries
    .filter(({ isIntersecting }) => isIntersecting)
    .forEach(({ target }) => Dom.addClass(target, VISIBLE_RECOGNIZE_CLASS))
}

function observerTargeting() {
  return Dom.getElements(`.${TARGET_CLASS}`).forEach(el => observer.observe(el))
}

function disconnect() {
  if (!observer) {
    throw Error('Not found IntersectionObserver instance')
  }
  return Promise.resolve(observer.disconnect())
}

export function init() {
  observer = new IntersectionObserver(observeCallback, {
    root: Dom.getElement(ROOT_ID),
    rootMargin: INTERSECTION_OBSERVER_ROOT_MARGIN,
    threshold: INTERSECTION_OBSERVER_THRESHOLD,
  })

  return observerTargeting()
}

export function destroy() {
  disconnect()
  observer = null
}

export function refreshObserver() {
  return disconnect().then(observerTargeting)
}
