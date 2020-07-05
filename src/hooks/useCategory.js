import { useEffect, useState, useCallback } from 'react'
import qs from 'query-string'
import { CATEGORY_TYPE } from '../constants'
import * as ScrollManager from '../utils/scroll'

const DEST_POS = 316

export function useCategory() {
  const [category, setCategory] = useState(CATEGORY_TYPE.ALL)
  const adjustScroll = () => {
    if (window.scrollY > DEST_POS) {
      ScrollManager.go(DEST_POS)
    }
  }
  const selectCategory = useCallback(category => {
    setCategory(category)
    adjustScroll()
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
    if (withScroll) {
      adjustScroll()
    }
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
