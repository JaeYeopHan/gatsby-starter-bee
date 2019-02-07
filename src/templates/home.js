import React, { useState, useEffect, useRef } from 'react'

import { ThumbnailItem } from '../components/thumbnail-item'
import { CATEGORY_TYPE } from '../constants'
import * as IOManager from '../utils/visible'
import * as Storage from '../utils/storage'
import * as Dom from '../utils/dom'

const BASE_LINE = 80

let ticking = false

function getDistance(degree) {
  return Dom.getDocumentHeight() - degree
}

export default ({ posts, countOfInitialPost, currentCategory }) => {
  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll, { passive: false })
    IOManager.init()

    return () => {
      window.removeEventListener(`scroll`, handleScroll, {
        passive: false,
      })
      IOManager.destroy()
      Storage.setState(prevCount.current)
    }
  }, [])

  useEffect(
    () => {
      IOManager.refreshObserver()
    },
    [currentCategory]
  )

  const [currentCount, setCurrentCount] = useState(Storage.getState() || 1)
  const prevCount = useRef()

  useEffect(
    () => {
      prevCount.current = currentCount
    },
    [currentCount]
  )

  useEffect(
    () => {
      IOManager.refreshObserver()
      ticking = false
    },
    [currentCount]
  )

  const handleScroll = () => {
    if (ticking) {
      return
    }

    ticking = true
    requestAnimationFrame(() => {
      const isTriggerPosition =
        getDistance(window.scrollY + window.innerHeight) < BASE_LINE

      if (!isTriggerPosition) {
        ticking = false
        return
      }

      const isNeedLoadMore = posts.length > currentCount * countOfInitialPost

      if (isNeedLoadMore && isTriggerPosition) {
        return setCurrentCount(prevCount.current + 1)
      }
    })
  }

  return posts
    .filter(
      ({ node }) =>
        currentCategory === CATEGORY_TYPE.ALL ||
        node.frontmatter.category === currentCategory
    )
    .slice(0, currentCount * countOfInitialPost)
    .map(({ node }, index) => (
      <ThumbnailItem node={node} key={`item_${index}`} />
    ))
}
