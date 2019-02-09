import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min'

let scroll

export function init() {
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
