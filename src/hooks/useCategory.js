import { useEffect, useState, useCallback } from 'react'
import qs from 'query-string'
import { CATEGORY_TYPE } from '../constants'
import * as ScrollManager from '../utils/scroll'

const DEST_POS = 316

export function useCategory() {
  const [category, setCategory] = useState(CATEGORY_TYPE.ALL)
  const selectCategory = useCallback(category => {
    setCategory(category)
    ScrollManager.go(DEST_POS)
    window.history.pushState(
      { category },
      '',
      `${window.location.pathname}?${qs.stringify({ category })}`
    )
  }, [])
  const changeCategory = useCallback((withScroll = true) => {
    const { category } = qs.parse(location.search)
    const target = category == null ? CATEGORY_TYPE.ALL : category

    setCategory(target)
    withScroll && ScrollManager.go(DEST_POS)
  }, [])

  useEffect(() => {
    ScrollManager.init()
    return () => {
      ScrollManager.destroy()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', changeCategory)

    return () => {
      window.removeEventListener('popstate', changeCategory)
    }
  }, [])

  useEffect(() => {
    changeCategory(false)
  }, [])

  return [category, selectCategory]
}
