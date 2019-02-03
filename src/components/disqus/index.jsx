import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

export class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = { toasts: [] }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!!' })
    this.setState({ toasts })
  }

  render() {
    const { post, shortName, siteUrl, slug } = this.props
    const url = siteUrl + slug

    return (
      <ReactDisqusComments
        shortname={shortName}
        identifier={post.frontmatter.title}
        title={post.frontmatter.title}
        url={url}
        category_id={post.frontmatter.category_id}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}
