import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min'
import smoothscroll from 'smoothscroll-polyfill';

let scroll

export function init() {
  smoothscroll.polyfill()
  scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
  })
  return scroll
}

export function destroy() {
  if (!scroll) throw Error('Not founded SmoothScroll instance')

  scroll.destroy()
  scroll = null

  return scroll
}

export function go(dest) {
  if (!scroll) throw Error('Not founded SmoothScroll instance')

  scroll.animateScroll(dest)

  return scroll
}
