export function toFit(
  cb,
  { dismissCondition = () => false, triggerCondition = () => true }
) {
  if (!cb) {
    throw Error('Invalid required arguments')
  }

  let tick = false

  return function() {
    if (tick) {
      return
    }

    tick = true
    return requestAnimationFrame(() => {
      if (dismissCondition()) {
        tick = false
        return
      }

      if (triggerCondition()) {
        tick = false
        return cb()
      }
    })
  }
}
