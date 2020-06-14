import { useEffect } from 'react'
import * as IOManager from '../utils/visible'

export function useIntersectionObserver() {
  useEffect(() => {
    IOManager.init()
    return () => {
      IOManager.destroy()
    }
  }, [])

  useEffect(() => {
    IOManager.refreshObserver()
  })
}
