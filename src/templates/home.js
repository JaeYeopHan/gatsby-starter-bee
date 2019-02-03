import React, { Component } from 'react'

import { ThumbnailItem } from '../components/thumbnail-item'
import { CATEGORY_TYPE } from '../constants'
import * as IOManager from '../utils/visible'
import * as Storage from '../utils/storage'

const BASE_LINE = 80

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.totalCount = props.posts.length
    this.countOfInitialPost = props.countOfInitialPost

    const savedCount = Storage.getState()

    this.state = {
      currentCount: savedCount || 1,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll, { passive: false })
    IOManager.init()
  }

  componentWillUnmount() {
    Storage.setState(this.state.currentCount)
    window.removeEventListener(`scroll`, this.handleScroll, { passive: false })
    IOManager.destroy()
  }

  handleScroll() {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.updateStatus())
    }
  }

  updateStatus() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    const isTriggerPosition = distanceToBottom < BASE_LINE

    if (!isTriggerPosition) {
      this.ticking = false
      return
    }

    const { totalCount, countOfInitialPost } = this
    const { currentCount } = this.state
    const isNeedLoadMore = totalCount > currentCount * countOfInitialPost

    if (isNeedLoadMore && isTriggerPosition) {
      this.setState(
        prevState => ({
          currentCount: prevState.currentCount + 1,
        }),
        () => {
          IOManager.refreshObserver()
          this.ticking = false
        }
      )
    }
  }

  componentDidUpdate(prevProps) {
    const { currentCategory: prevCategory } = prevProps
    const { currentCategory } = this.props

    if (prevCategory !== currentCategory) {
      IOManager.refreshObserver()
    }
  }

  render() {
    const { posts, countOfInitialPost, currentCategory } = this.props
    const { currentCount } = this.state
    const countOfItem = currentCount * countOfInitialPost
    const filtered =
      currentCategory === CATEGORY_TYPE.ALL
        ? posts
        : posts.filter(
            ({ node }) => node.frontmatter.category === currentCategory
          )

    return filtered
      .slice(0, countOfItem)
      .map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))
  }
}
